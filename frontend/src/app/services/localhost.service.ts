import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

export type LoggerType = 'info' | 'warning' | 'error' | 'success';
export type LoggerColors = 'red' | 'grey' | 'green' | 'blue' | 'cyan' | 'white' | 'yellow' | 'grey';

export interface LoggingParams {
  origin: string;
  message: string;
  type?: LoggerType;
  color?: LoggerColors;
  batchId?: number;
}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Injectable({
  providedIn: 'root'
})
export class LocalhostService {
  socketManagement: any;
  socketLambda: any;
  serverConnected: boolean;
  constructor(private httpClient: HttpClient) {
    this.socketManagement = io.connect('http://localhost:' + environment.nodeServerPort);
    this.socketManagement.on('connect', () => {
      this.serverConnected = true;
      this.plugUiUtils();
    });
    this.socketManagement.on('disconnect', () => {
      this.serverConnected = false;
    });
  }

  private plugUiUtils() {
    this.socketManagement.on('log', (params: LoggingParams) => {
      // Toast.fire({
      //   type: params.type,
      //   html: `${params.origin} - ${params.message}`
      // });
    });
    this.socketManagement.on('info', (params: LoggingParams) => {
      // Toast.fire({
      //   type: 'info',
      //   html: `${params.origin} - ${params.message}`
      // });
    });
    this.socketManagement.on('success', (params: LoggingParams) => {
      Toast.fire({
        type: 'success',
        html: `${params.origin} - ${params.message}`
      });
    });
    this.socketManagement.on('warning', (params: LoggingParams) => {
      Toast.fire({
        type: 'warning',
        html: `${params.origin} - ${params.message}`
      });
    });
    this.socketManagement.on('error', (params: LoggingParams) => {
      Toast.fire({
        type: 'error',
        html: `${params.origin} - ${params.message}`
      });
    });
    this.socketManagement.on('question', async (params: { text: string, origin: string }) => {
      const returnValue = await Swal.fire({
        text: params.text,
        type: 'question',
        input: 'text',
        showCancelButton: true
      });
      this.socketManagement.emit('response', returnValue.value);
    });
  }

  private _waitForConnection(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.serverConnected) {
        resolve();
      } else {
        setTimeout(() => {
          this._waitForConnection()
            .then(resolve)
            .catch(reject);
        }, 200);
      }
    });
  }

  async get<T>(url: string): Promise<T> {
    await this._waitForConnection();
    const httpOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    };
    return <T>(
      await this.httpClient
        .get(`http://localhost:${environment.nodeServerPort}/${url}`, httpOptions)
        .toPromise()
    );
  }
  async post(url: string, body?: any) {
    const httpOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    };
    await this._waitForConnection();
    await this.httpClient.post(
      `http://localhost:${environment.nodeServerPort}/${url}`,
      body,
      httpOptions).toPromise();
  }
  hookManagementCallback(event: string, callback) {
    this.socketManagement.on(event, (data) => {
      callback(data);
    });
  }
  hookLambdaCallback(event: string, callback) {
    this.socketLambda.on(event, (data) => {
      callback(data);
    });
  }
  async socketEmit(event: string, data: any) {
    await this._waitForConnection();
    await this.socketManagement.emit(event, data, () => { });
  }
  hookManagementPromise(event: string, callback) {
    return new Promise((resolve, reject) => {
      this._waitForConnection()
        .then(() => {
          this.socketManagement.on(event, (data) => {
            resolve(data);
          });
        })
        .catch(reject);
    });
  }
  hookLambdaPromise(event: string, callback) {
    return new Promise((resolve, reject) => {
      this._waitForConnection()
        .then(() => {
          this.socketLambda.on(event, (data) => {
            resolve(data);
          });
        })
        .catch(reject);
    });
  }
  removeAllListeners(events: string[]) {
    events.forEach(x => {
      this.socketManagement.removeAllListeners(x);
    });
  }
}
export type LoggerType = 'info' | 'warning' | 'error' | 'success';
export type LoggerColors = 'red' | 'grey' | 'green' | 'blue' | 'cyan' | 'white' | 'yellow' | 'grey';

export interface LoggingParams {
    origin: string,
    message: string,
    type?: LoggerType,
    color?: LoggerColors,
    batchId?: number
}

export class UiUtils {
    log(params: LoggingParams) {}
    info(params: LoggingParams) {}
    error(params: LoggingParams) {}
    warning(params: LoggingParams) {}
    success(params: LoggingParams) {}
    async question(params: {text: string, origin: string}): Promise<string> {return '';}
}
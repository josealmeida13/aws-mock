import {DatabaseHelper} from '../database/database-helper';
import { Application } from '../../models/application.model';
import { DatabaseObject } from '../../models/database-file.model';

export class ApplicationHelper {
    static async getApplications(): Promise<string[]> {
        const databaseObjects = await DatabaseHelper.getApplicationDatabaseObjects();
        const applications = Object.keys(databaseObjects)
            .map(databaseName => databaseName.replace(/-database$/i, ''));
        return applications;
    }

    static async getApplication(name: string): Promise<Application> {
        const databaseObject = await DatabaseHelper.getApplicationDatabaseObject(name + '-database');
        return {
            name: name,
            database: databaseObject
        };
    }
    static async getDatabase(name: string): Promise<DatabaseObject> {
        return await DatabaseHelper.getApplicationDatabaseObject(name + '-database');
        
    }
}
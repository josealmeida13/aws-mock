import { Action } from '@ngrx/store';
import { DatabaseObject, DatabaseTableForSave } from 'app/models/database-file.model';

export const PAGE_GET_DATABASE = '[Databases Page] get database';
export const ROUTER_GET_DATABASE = '[Databases Router] get database';
export const EFFECT_GET_DATABASE = '[Databases Effect] get database';
export const SERVICE_GET_DATABASE_COMPLETE = '[Databases Service] get database complete';
export const SERVICE_GET_DATABASE_FAILED = '[Databases Service] get database failed';

export class PageGetDatabase implements Action {
    readonly type = PAGE_GET_DATABASE;
    constructor(public payload: string) {
    }
}
export class RouterGetDatabase implements Action {
    readonly type = ROUTER_GET_DATABASE;
    constructor(public payload: string) {
    }
}
export class EffectGetDatabase implements Action {
    readonly type = EFFECT_GET_DATABASE;
    constructor(public payload: string) {
    }
}
export class ServiceGetDatabaseComplete implements Action {
    readonly type = SERVICE_GET_DATABASE_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceGetDatabaseFailed implements Action {
    readonly type = SERVICE_GET_DATABASE_FAILED;
    constructor(public payload: string) {
    }
}

export const PAGE_CREATE_DATABASE_TABLE = '[Databases Page] create database table';
export const SERVICE_CREATE_DATABASE_TABLE_COMPLETE = '[Databases Service] create database table complete';
export const SERVICE_CREATE_DATABASE_TABLE_FAILED = '[Databases Service] create database table failed';

export class PageCreateDatabaseTable implements Action {
    readonly type = PAGE_CREATE_DATABASE_TABLE;
    constructor(public payload: DatabaseTableForSave) {
    }
}
export class ServiceCreateDatabaseTableComplete implements Action {
    readonly type = SERVICE_CREATE_DATABASE_TABLE_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceCreateDatabaseTableFailed implements Action {
    readonly type = SERVICE_CREATE_DATABASE_TABLE_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_CREATE_DATABASE_FUNCTIONS = '[Databases Page] create database functions';
export const SERVICE_CREATE_DATABASE_FUNCTIONS_COMPLETE = '[Databases Service] create database functions complete';
export const SERVICE_CREATE_DATABASE_FUNCTIONS_FAILED = '[Databases Service] create database functions failed';

export class PageCreateDatabaseFunctions implements Action {
    readonly type = PAGE_CREATE_DATABASE_FUNCTIONS;
    constructor(public payload?: string) {
    }
}
export class ServiceCreateDatabaseFunctionsComplete implements Action {
    readonly type = SERVICE_CREATE_DATABASE_FUNCTIONS_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceCreateDatabaseFunctionsFailed implements Action {
    readonly type = SERVICE_CREATE_DATABASE_FUNCTIONS_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_INITIALIZE_DATABASE = '[Databases Page] initialize database';
export const SERVICE_INITIALIZE_DATABASE_COMPLETE = '[Databases Service] initialize database complete';
export const SERVICE_INITIALIZE_DATABASE_FAILED = '[Databases Service] initialize database failed';

export class PageInitializeDatabase implements Action {
    readonly type = PAGE_INITIALIZE_DATABASE;
    constructor(public payload?: string) {
    }
}
export class ServiceInitializeDatabaseComplete implements Action {
    readonly type = SERVICE_INITIALIZE_DATABASE_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceInitializeDatabaseFailed implements Action {
    readonly type = SERVICE_INITIALIZE_DATABASE_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_ADD_TEMPLATE = '[Databases Page] add template';
export const SERVICE_ADD_TEMPLATE_COMPLETE = '[Databases Service] add template complete';
export const SERVICE_ADD_TEMPLATE_FAILED = '[Databases Service] add template failed';

export class PageAddTemplate implements Action {
    readonly type = PAGE_ADD_TEMPLATE;
    constructor(public payload: string) {
    }
}
export class ServiceAddTemplateComplete implements Action {
    readonly type = SERVICE_ADD_TEMPLATE_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceAddTemplateFailed implements Action {
    readonly type = SERVICE_ADD_TEMPLATE_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_REFRESH = '[Databases Page] refresh';
export const SERVICE_REFRESH_COMPLETE = '[Databases Service] refresh complete';
export const SERVICE_REFRESH_FAILED = '[Databases Service] refresh failed';

export class PageRefresh implements Action {
    readonly type = PAGE_REFRESH;
    constructor(public payload?: string) {
    }
}
export class ServiceRefreshComplete implements Action {
    readonly type = SERVICE_REFRESH_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceRefreshFailed implements Action {
    readonly type = SERVICE_REFRESH_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_CREATE_VERSION = '[Databases Page] create version';
export const SERVICE_CREATE_VERSION_COMPLETE = '[Databases Service] create version complete';
export const SERVICE_CREATE_VERSION_FAILED = '[Databases Service] create version failed';

export class PageCreateVersion implements Action {
    readonly type = PAGE_CREATE_VERSION;
    constructor(public payload?: string) {
    }
}
export class ServiceCreateVersionComplete implements Action {
    readonly type = SERVICE_CREATE_VERSION_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceCreateVersionFailed implements Action {
    readonly type = SERVICE_CREATE_VERSION_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_INSTALL_DATABASE = '[Databases Page] install database';
export const SERVICE_INSTALL_DATABASE_COMPLETE = '[Databases Service] install database complete';
export const SERVICE_INSTALL_DATABASE_FAILED = '[Databases Service] install database failed';

export class PageInstallDatabase implements Action {
    readonly type = PAGE_INSTALL_DATABASE;
    constructor(public payload?: { name: string, version: string }) {
    }
}
export class ServiceInstallDatabaseComplete implements Action {
    readonly type = SERVICE_INSTALL_DATABASE_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceInstallDatabaseFailed implements Action {
    readonly type = SERVICE_INSTALL_DATABASE_FAILED;
    constructor(public payload?: string) {
    }
}
export const PAGE_CHECK_PARAMETERS = '[Databases Page] check parameters';
export const SERVICE_CHECK_PARAMETERS_COMPLETE = '[Databases Service] check parameters complete';
export const SERVICE_CHECK_PARAMETERS_FAILED = '[Databases Service] check parameters failed';

export class PageCheckParameters implements Action {
    readonly type = PAGE_CHECK_PARAMETERS;
    constructor(public payload: string) {
    }
}
export class ServiceCheckParametersComplete implements Action {
    readonly type = SERVICE_CHECK_PARAMETERS_COMPLETE;
    constructor(public payload: DatabaseObject) {
    }
}
export class ServiceCheckParametersFailed implements Action {
    readonly type = SERVICE_CHECK_PARAMETERS_FAILED;
    constructor(public payload?: string) {
    }
}

export type DatabasesActions =
    | EffectGetDatabase
    | PageGetDatabase
    | RouterGetDatabase
    | ServiceGetDatabaseComplete
    | ServiceGetDatabaseFailed

    | PageCreateDatabaseTable
    | ServiceCreateDatabaseTableComplete
    | ServiceCreateDatabaseTableFailed

    | PageCreateDatabaseFunctions
    | ServiceCreateDatabaseFunctionsComplete
    | ServiceCreateDatabaseFunctionsFailed

    | PageInitializeDatabase
    | ServiceInitializeDatabaseComplete
    | ServiceInitializeDatabaseFailed

    | PageAddTemplate
    | ServiceAddTemplateComplete
    | ServiceAddTemplateFailed

    | PageRefresh
    | ServiceRefreshComplete
    | ServiceRefreshFailed

    | PageCreateVersion
    | ServiceCreateVersionComplete
    | ServiceCreateVersionFailed

    | PageInstallDatabase
    | ServiceInstallDatabaseComplete
    | ServiceInstallDatabaseFailed
    ;

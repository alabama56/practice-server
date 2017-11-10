import { procedure } from "../db/index";
import { pluralize } from "../middleware/utils.mw"

export const rows = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((rows) => {
            return rows[0];
        });
};

export const row = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((rows) => {
            return rows[0][0];
        });
};

export const empty = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then(() => {
            return;
        });
};
 //crud is the function that takes the model name and then returns an object that has the all key on and the calue is the all function called with the pluralize mw on it

const prefix = 'sp';
const SQL_GET = `${prefix}Get`;
const SQL_INSTERT = `${prefix}Insert`;
const SQL_UPDATE = `${prefix}Update`;
const SQL_DELETE = `${prefix}Delete`;

const all = (MODEL_NAME: string) => { 
    return () => {
        return rows(`${SQL_GET}${MODEL_NAME}`);
    };
};

const read = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return row(`${SQL_GET}${MODEL_NAME}`, args);
    };
};

const destroy = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return empty(`${SQL_DELETE}${MODEL_NAME}`, args);
    };
};

const create = (MODEL_NAME: string) => {
    return () => {
        return row(`${SQL_INSTERT}${MODEL_NAME}`);
    };
};

const update = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return empty(`${SQL_UPDATE}${MODEL_NAME}`, args);
    };
};
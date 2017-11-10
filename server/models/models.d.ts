declare namespace Express {
    export interface Request {
        payload?: any;
    }
}

declare namespace models {
    export interface IChirp {
        id?: string;
        user: string;
        message: string;
        image?: string;
    }

    export interface IUser {
        id?: string;
        user?: string;
        email?: string;
        password?: string;
    }
}
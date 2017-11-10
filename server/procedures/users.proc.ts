import { rows, row, empty } from "./base.proc";


const all = () => {
    return rows("spGetUsers");
};

const read = (id: number) => {
    return row("spGetUser", [id]);
};

const destroy = (id: number) => {
    return empty("spDeleteUser", [id]);
};

const create = (username: string, email: string, password: string) => {
    return row("spInsertUser", [username, email, password]);
};

const update = (id: number, username: string, email: string, password: string) => {
    return empty("spUpdateUser", [id, username, email, password]);
}

export default {
    all,
    read,
    destroy,
    create,
    update
};
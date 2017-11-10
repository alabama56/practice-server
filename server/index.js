"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const api_1 = require("./routers/api");
const index_1 = require("./db/index");
const client = path.join(__dirname, '..', 'client', 'dist');
const app = express();
app
    .disable('x-powered-by')
    .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
    .use(bp.urlencoded({ extended: true }))
    .use(bp.json())
    .use('/api', api_1.default);
//uncomment for prod
// .use('/', log, express.static(client, { redirect: false }))
// .get('/*', log, (req: express.Request, res: express.Response) => {
//     res.sendFile(path.join(client, 'index.html'));
// });
app
    .listen(3000, () => {
    index_1.configure();
    console.log('listening on port 3000');
});

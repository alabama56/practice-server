import * as express from 'express';
import * as path from 'path';
import * as bp from 'body-parser';
import * as url from 'url';
import api from './routers/api';
import { configure } from './db/index';

const client = path.join(__dirname, '..', 'client', 'dist');

const app: express.Application = express();

app
    .disable('x-powered-by')
    //uncomment for dev
    .use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");    
        next();
    })
    .use(bp.urlencoded({ extended: true }))
    .use(bp.json())
    .use('/api', api)
    //uncomment for prod
    // .use('/', log, express.static(client, { redirect: false }))
    // .get('/*', log, (req: express.Request, res: express.Response) => {
    //     res.sendFile(path.join(client, 'index.html'));
    // });

app
    .listen(3000, () => {
        configure();
        console.log('listening on port 3000');
    });

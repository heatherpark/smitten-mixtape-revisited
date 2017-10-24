import express from 'express';
import routes from './config/routes';
import middleware from './config/middleware';
import db from './database';

const app = express();

middleware(app, express);
routes(app, express);

db.on('err', console.error.bind(console, 'database connection error'));
db.once('open', () => { console.log('Mongodb connection open'); });

app.listen(8000, () => console.log('Listening on port 8000'));

export default app;
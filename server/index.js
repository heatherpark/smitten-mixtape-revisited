import express from 'express';
import routes from './config/routes';
import middleware from './config/middleware';
import mongoose from 'mongoose';

const app = express();

middleware(app, express);
routes(app, express);

const mongoUri = 'mongodb://127.0.0.1/smitten-mixtape-revisited';
mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('err', console.error.bind(console, 'database connection error'));
db.once('open', () => { console.log('Mongodb connection open'); });

app.listen(8000, () => console.log('Listening on port 8000'));

export { app, db };
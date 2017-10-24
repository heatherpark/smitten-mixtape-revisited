import express from 'express';
import routes from './config/routes';

const app = express();

routes(app, express);

app.listen(8000, () => console.log('Listening on port 8000'));

export default app;
import bodyParser from 'body-parser';

export default (app, express) => {
  app.use(bodyParser.json());
}
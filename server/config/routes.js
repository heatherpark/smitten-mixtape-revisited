export default (app, express) => {
  app.post('/playlist/:id', (req, res, next) => {
    console.log(req.body.title);
    next();
  });
}
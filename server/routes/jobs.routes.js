const routesctl = require('./controller');

module.exports = (app) => {
  app.get('/api/users', routesctl.getAllUsers)
  app.get('/api/users/:id', routesctl.getOneUser)
  app.post('/api/users', routesctl.createUser)
  app.put('/api/users/:id', routesctl.updateUser)
  app.post('/api/users/:id/jobs', routesctl.addJobToUser)
}
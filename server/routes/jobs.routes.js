const routesCtl = require('..controllers/jobs.controller');

module.exports = (app) => {
    // Route to find a single job
    app.get('/api/jobs/:id', routesCtl.getOneJob);
    // Route to find all jobs
    app.get('/api/jobs', authenticate, routesCtl.getAllJobs);
    // Route to create a job
    app.post('/api/newJob', authenticate, routesCtl.createJob);
    // Route to delete a job
    app.delete('/api/delete/:id', routesCtl.deleteJob);
    // Route to update a job
    app.put('/api/update/:id', routesCtl.updateJob);
}
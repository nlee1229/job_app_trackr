const Job = require('../models/Job.model');

// Method to find one job
module.exports.getOneJob = (req, res) => {
    Job.findOne(req.params._id) // find one job using id
        .then(job => res.json(job))
        .catch(err => res.json({ error: err }))
}

// Method to find all jobs
module.exports.getAllJobs = (req, res) => {
    Job.find()
        .then(allJobs => res.json({allJobs}))
        .catch(err => res.json({ error: err }))
}

//  Method to create a new job
module.exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(newJob => res.json ({ newJob }))
        // .catch(err => res.json({error: err}))
        .catch(err => res.status(400).json(err));
}

// Method to delete a job
module.exports.deleteJob = (req, res) => {
    Job.deleteOne(req.params._id)
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}

module.exports.updateJob = (req, res) => {
    Job.findByIdAndUpdate(req.params._id, req.body)
        .then(updatedJob => res.json(updatedJob))
        .catch(err => res.json({ error: err }))
}
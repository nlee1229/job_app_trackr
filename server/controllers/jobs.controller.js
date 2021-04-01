const { request } = require('express');
const Job = require('../models/Job.model');

// CRUD for jobs
// get all of the properties

module.exports.getAllJobs = (req, res)
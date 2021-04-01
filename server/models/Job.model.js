const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    jobTitle: {
        type: String
    },
    dateApplied: {
        type: String
    },
    salaryRange: {
        type: String
    },
    location: {
        type: String, 
    },
    jobLevel: {
        type: String
    },
    jobDescription: {
        type: String
    },
    companyDescription: {
        type: String
    }, 
    notes: {
        type: String
    },
    applicationSite: {
        type: String
    },
    resume: {
        type: String
    },
    status: {
        type: String
    }
}, {timestamps: true});


const Rental = mongoose.model('Job', JobSchema); // collection will be Job
module.exports = Rental;
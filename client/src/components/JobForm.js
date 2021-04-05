import React, {useState} from 'react';
import axios from 'axios';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

const JobForm = () => {
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [dateApplied, setDateApplied] = useState("");
    const [salaryRange, setSalaryRange] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [notes, setNotes] = useState("");
    const [applicationSite, setApplicationSite] = useState("");
    const [resume, setResume] = useState("");
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/${e._id}/jobs`, {
            companyName,
            jobTitle,
            dateApplied,
            salaryRange,
            jobLevel,
            jobDescription,
            companyDescription,
            notes,
            applicationSite,
            resume,
            status
        },
        {withCredentials: true})
        .then(res => console.log(`Response: ${res}`))
        .catch(err => console.log(`Error: ${err}`))
    }




    return (
        <div>
            <form onSubmit={submitHandler} className="main_form">
            
                <div className="form_box">
                    <div className="left_box mb-3">
                    <h4>Add a new job!</h4>
                        <p><input type="text" class="form-control" name="companyName" placeholder = "Company Name" /></p>
                        <p><input type="text" class="form-control" name="jobTitle" placeholder = "Job Title" /></p>
                        <p><input type="date" class="form-control" name="dateApplied" placeholder = "Date Applied" /></p>
                        <p><input type="text" class="form-control" name="salaryRange" placeholder = "Salary Range" /></p>
                        <p><input type="text" class="form-control" name="jobLevel" placeholder = "Experience Level" /></p>
                        <p><input type="text" class="form-control" name="jobDescription" placeholder = "Job Description" /></p>
                    </div>
                    <div className="right_box mb-3">    
                        <p><input type="text" class="form-control" name="companyDescription" placeholder = "Company Description" /></p>
                        <p><input type="text" class="form-control" name="location" placeholder = "Company Location" /></p>
                        <p><input type="text" class="form-control" name="applicationSite" placeholder = "Application Method" /></p>
                        <p><input type="text" class="form-control" name="resume" placeholder = "Resume" /></p>
                        <p><textarea type="text" class="form-control" name="notes" placeholder = "Extra Notes" /></p>
                        <button type="button" className="btn btn-outline-primary">Add Job</button>
                    </div>
                </div>
                {/* <div className="status_box">
                    {/* <div className="job_status">
                        <label>Status:</label>
                        <select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="Heard Back">Heard Back 😄</option>
                            <option value="Haven't heard Back">Haven't heard back 🙁</option>
                        </select>
                    </div> */}
                    
                {/* </div> */} 
            </form>
        </div>
    );
}

export default JobForm;

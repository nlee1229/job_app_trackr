import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import JobForm from '../components/JobForm';

const Dashboard = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => setUsers(res.data))
    }, []);

    if (users == null) return 'Loading...';

    return (
        <div>
            <JobForm />
        {/* since each element has a jobs array, we must map over the jobs as well */}
            {users.map((user, idx) => (
                <div key ={idx}>
                    <hr/>
                    <h1>{user.username}</h1>
                    {user.jobs.map((c, i) => (
                        <div key={i}>
                            <h3>{c.companyName}</h3>
                            <h3>{c.jobTitle}</h3>
                            <h3>{c.dateApplied}</h3>
                            <h3>{c.location}</h3>
                          
                        </div>
                    ))}
                </div>
            ))}


        </div>
    )
}

export default Dashboard;

    {/* {users.map((user, idx) => (
                
                <div key={idx}>
                    <h2>{user.username}</h2>
                    <h2>{user.jobs[0].companyName}</h2>

                    
                    {
                        user.jobs.map((key, i) => {
                            <div key={i}>

                                <ul>
                                    <li key={i}>{key.companyName}</li>
                                    <li key={i}>{key.jobTitle}</li>

                                </ul>

                            </div>
                            
                        })
                    }

                </div>
            ))} */}
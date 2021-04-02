import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Dashboard = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => setUsers(res.data))
    }, []);

    if (users == null) return 'Loading...';

    return (
        <div>
            {users.map((user, idx) => (
                
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
            ))}

        </div>
    );
}

export default Dashboard;

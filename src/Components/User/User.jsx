import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const { id, name, email, phone } = user;

    const usersPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const userStyle = {
        border: '2px solid red',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={userStyle} >
            <h3> {name} </h3>
            <p>Email: {email} </p>
            <p> <small> phone: {phone}  </small> </p>
            <Link to={`/users/${id}`} >Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)} >{showInfo ? 'Hide' : 'Show'} info</button>
            {
                showInfo && <Suspense fallback={ <span>Loading...</span> } >
                    <UserDetails2 usersPromise={usersPromise} ></UserDetails2>
                </Suspense>
            }
            
        </div>
    );
};

export default User;
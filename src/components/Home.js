import React, { useEffect, useState } from 'react';
import './Home.css';
import Login from './Login';
import Registro from './Registro';
import { Redirect } from 'react-router-dom';

const Home = () => {
    const [token, setToken] = useState();
    
    useEffect(() => {
        const sessiontoken = window.localStorage.getItem('SESSION_TOKEN');
        if(sessiontoken){
            setToken(sessiontoken)
        };
    }, []);

    if(token) return <Redirect to='/' />
    return(
        <div>
            <Registro />

            <br />

            <Login />
        </div>
    );
}

export default Home;
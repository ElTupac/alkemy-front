import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import CrearOperacion from './CrearOperacion';
import ContainerOperations from './ContainerOperations';

const Operations = () => {
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const sessiontoken = window.localStorage.getItem('SESSION_TOKEN');
        if(sessiontoken){
            setToken(sessiontoken);
        }
        setLoading(false);
    }, []);

    if(!loading && !token) return <Redirect to='/home' />
    else if(loading) return <img src="loading-12.gif" />
    return(
        <>
            <CrearOperacion token={token} />
            <ContainerOperations token={token} />
        </>
    );
}

export default Operations;
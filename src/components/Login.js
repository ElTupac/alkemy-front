import React, { useState, useEffect } from 'react';
import { urlApi } from '../constants/urls';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        if(token){
            window.localStorage.setItem('SESSION_TOKEN', token);
        }
    }, [token])

    function handleClick() {
        if(email && password){
            fetch(`${urlApi}api/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            }).then(res => res.json())
            .then(res => {
                if(res.ok){
                    setToken(res.user.token);
                }
            });
        }else{
            //mostrar cartel de error
        }
    }

    if(token) return <Redirect to='/' />
    return(
        <div>
            <p>Login</p>
            <input onInput={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
            {email?.length ? <input onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Contrasenia" /> : <></>}
            <button onClick={handleClick}>Ingresar</button>
        </div>
    )
}

export default Login;
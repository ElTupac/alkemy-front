import React, { useState } from 'react';
import { urlApi } from '../constants/urls';

const Registro = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleClick() {
        console.log(name, email, password);
        if(name && email && password){
            fetch(`${urlApi}api/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password})
            }).then(res => res.json())
            .then(res => {console.log(res)});
        }else{
            //mostrar cartel de error
        }
    }

    return(
        <div>
            <p>Registro</p>
            <input type="text" onInput={(e) => setName(e.target.value)} placeholder="Nombre" />
            {name?.length ? <input type="email" onInput={(e) => setEmail(e.target.value)} placeholder="Email" /> : <></>}
            {email?.length ? <input type="password" onInput={(e) => setPassword(e.target.value)} placeholder="Crea una contrasenia"/> : <></>}
            <button onClick={handleClick} >Registrarse</button>
        </div>
    )
}

export default Registro;
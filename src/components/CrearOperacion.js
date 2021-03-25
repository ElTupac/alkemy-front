import React, { useState } from 'react';
import { urlApi } from '../constants/urls';

const CrearOperacion = (props) => {
    const [mount, setMount] = useState();
    const [concept, setConcept] = useState();
    const [date_done, setDate_done] = useState();
    const [op_type, setOp_type] = useState("EGRESO");
    const [category, setCategory] = useState("food");

    function handleClick(){
        if(mount && concept && date_done && op_type){
            fetch(`${urlApi}api/create-operation`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': props.token
                },
                body: JSON.stringify({mount, concept, date_done, op_type, category})
            }).then(res => res.json())
            .then(res => {
                if(res.ok) window.location.reload();
            });
        }
    }

    return(
        <div>
            <input type="number" onInput={(e) => setMount(parseFloat(e.target.value))} placeholder="Monto" />
            <input type="text" onInput={(e) => setConcept(e.target.value)} placeholder="Concepto" />
            <input type="date" onChange={(e) => setDate_done(e.target.value)} />
            <select defaultValue="EGRESO" onChange={(e) => setOp_type(e.target.value)} >
                <option value="INGRESO">Ingreso</option>
                <option value="EGRESO">Egreso</option>
            </select>
            <select defaultValue="food" onChange={(e) => setCategory(e.target.value)} >
                <option value="food">Comida</option>
                <option value="clothes">Ropa</option>
                <option value="cleaning">Limpieza</option>
            </select>
            <button onClick={handleClick} >Crear</button>
        </div>
    )
}

export default CrearOperacion;
import React, {useState} from 'react';
import { urlApi } from '../constants/urls';

const ItemOperation = ({data, token, callback}) => {
    const { concept, mount, op_type, category } = data;
    const [updateConcept, setUpdateConcept] = useState(concept);
    const [updateMount, setUpdateMount] = useState(mount);
    const [modify, setModify] = useState(false);

    function handleClick(){
        if(updateConcept || updateMount){
            fetch(`${urlApi}api/update-operation`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
                body: JSON.stringify({op_id: data.id, concept: updateConcept, mount: updateMount})
            }).then(res => res.json())
            .then(res => {
                if(res.ok && typeof callback === 'function') callback();
            });
        }
    }

    function handleDelete(e){
        e.stopPropagation();
        fetch(`${urlApi}api/delete-operation`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({op_id: data.id})
        }).then(res => res.json())
        .then(res => {
            if(res.ok && typeof callback === 'function') callback();
        });
    }

    return(
        <div onClick={() => setModify(true)} >
            {
                modify ? 
                    <>
                        <input type="text" onInput={(e) => {setUpdateConcept(e.target.value)}} placeholder={concept}/>
                        <input type="number" onInput={(e) => {setUpdateMount(e.target.value)}} placeholder={mount} />
                    </>
                    :
                    <>
                        <h2>{concept}</h2>
                        <p>{mount}</p>
                    </>
            }
            <p>{op_type} - {category}</p>
            {modify ? <button onClick={handleClick}>Modificar</button> : <button onClick={handleDelete} >Eliminar</button>}
        </div>
    );
}

export default ItemOperation;
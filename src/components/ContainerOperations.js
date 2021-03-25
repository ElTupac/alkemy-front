import React, { useEffect, useState } from 'react';
import {urlApi} from '../constants/urls';
import ItemOperation from './ItemOperation';

const ContainerOperations = ({token}) => {
    const [operations, setOperations] = useState();

    function getOperations() {
        fetch(`${urlApi}api/operations`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        }).then(res => res.json())
        .then(res => {
            if(res.ok){
                setOperations(res.operations);
            }
        });
    }

    useEffect(getOperations, []);

    return(
        <div className="container-operations" >
            {
                operations ? 
                    operations.map((item, index) => <ItemOperation callback={getOperations} token={token} key={`operation-${index}`} data={item} />)
                    :
                    <></>
            }
        </div>
    );
}

export default ContainerOperations;
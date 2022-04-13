import React, { useEffect, useState } from 'react'
import { getArray } from '../Array';
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [zapas, setZapas] = useState([]);

    useEffect(()=>{
        async function pedirDatos(){
            let datosLlegando = await getArray()
            setZapas(datosLlegando)
        }
        pedirDatos()
        
    }, [])
    
    return(
        <>
        <ItemList productos={zapas}></ItemList>
        </>
    )
}

export default ItemListContainer
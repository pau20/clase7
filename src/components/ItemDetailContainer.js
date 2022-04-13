import { useEffect, useState } from "react"
import customFetch from "../customFetch";
import ItemDetail from "./ItemDetail"

const {products} = require('../Array')

const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});

    useEffect(()=>{
        customFetch(2000, products[8])
        .then(result => setDato(result))
        .catch(err=> console.log(err))
    }, []);

    return(
        <>
        <ItemDetail item={dato}></ItemDetail>
        </>
    )

}

export default ItemDetailContainer;
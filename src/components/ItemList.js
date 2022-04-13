import React from "react";
import { Container, Row } from "reactstrap";
import Item from './Item'

const ItemList = ({productos}) =>{
    return(
        <> 
        <Container>
            <Row>
                { productos.map((product)=>{
                    return(
                        <>
                        <Item key={product.id} {...product}></Item>
                        </>
                    )
                })

                }
            </Row>
        </Container>
        </>
    )
}

export default ItemList
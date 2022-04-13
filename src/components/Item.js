import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

const Item = ({id, title, price, brand, img}) =>{
    return(
        <>
        <Card key={id}>
            <CardImg alt="Card image cap"
                src={img.url}
                top
                width="100%"/>
            <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">{price}</CardSubtitle>
            <CardText>{brand}</CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
        </>
    )
}

export default Item
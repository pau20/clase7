import ItemCount from './ItemCount';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ? 
            <Card>
                <CardImg
                alt="Card image cap"
                src="https://picsum.photos/256/186"
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    Card title
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Card subtitle
                </CardSubtitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                <Button>
                    Button
                </Button>
                </CardBody>
            </Card>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
import { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {

    //state
    state = {
        selected: false
    }

    // Funzione per selezionare/deselezionare una card
    buttonSelected = () => {
        this.setState(state => ({
            selected: !state.selected // Invertire il valore di selected
        }));
    }

    render() {
        const { book } = this.props;  // Recupero il libro dalla props
        const { selected } = this.state; //Recupero selected dallo state

        return (
            <Col xs={12} md={4} key={book.asin} className="mb-4">
                <Card style={{ width: '18rem' }} className={`h-100 ${selected ? 'border-3 border-danger bg-dark text-white shadow-lg' : ''}`}>
                    <Card.Img variant="top" src={book.img} onClick={this.buttonSelected} />
                    <Card.Body>
                        <Card.Title className="text-center">{book.title}</Card.Title>
                        <Card.Text className="text-center">
                            Prezzo: €{book.price}
                        </Card.Text>
                        {selected ? (
                            <>
                                <CommentArea commentId={book.asin} />
                            </>
                        ) : ''}
                    </Card.Body>
                </Card>

            </Col>
        )
    }
}

export default SingleBook
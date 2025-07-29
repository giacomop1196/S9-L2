import { Card, Container, Row, Col } from "react-bootstrap"
import fantasyBook from '../data/fantasy.json'

const AllTheBooks = () => {
    return (
        <Container className="mt-5">
            <Row>
                {fantasyBook.map((book) => {
                    return (
                        <Col xs={12} md={4} key={book.asin} className="mb-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="h-100">
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title className="text-center">{book.title}</Card.Title>
                                    <Card.Text className="text-center">
                                        Prezzo: €{book.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
            </Row>
        </Container>
    )
}

export default AllTheBooks
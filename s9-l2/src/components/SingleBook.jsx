import { Col, Card } from "react-bootstrap";; 

const SingleBook = ({ book, onBookClick, selectedBookAsin }) => {
    const isSelected = selectedBookAsin === book.asin;

    return (
        <Col xs={12} md={4} className="mb-4 mx-auto">
            <Card
                style={{ width: '18rem' }}
                className={`h-100 ${isSelected ? 'border-3 border-danger bg-dark text-white shadow-lg' : ''}`}
            >
                <Card.Img
                    variant="top"
                    src={book.img}
                    onClick={() => {
                        onBookClick(book.asin);
                    }}
                />
                <Card.Body>
                    <Card.Title className="text-center">{book.title}</Card.Title>
                    <Card.Text className="text-center">
                        Prezzo: €{book.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBook;
import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ gender: currentGender }) => {
    const [searchForm, setSearchForm] = useState('');
    const [bookSelected, setBookSelected] = useState('');

    const handleSearchChange = (e) => {
        setSearchForm(e.target.value);
    };

    const handleBookClick = (asin) => {
        setBookSelected(asin);
    };


    const filteredBooks = currentGender.filter((book) =>
        book.title.toLowerCase().includes(searchForm.toLowerCase())
    );

    return (
        <Container className="mt-2">
            <Row>
                <Col>
                    <Form className="mb-3">
                        <Form.Group className="mb-3 text-center">
                            <Form.Label>Cerca per titolo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Titolo Libro"
                                value={searchForm}
                                onChange={handleSearchChange}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <SingleBook
                                    book={book}
                                    key={book.asin}
                                    onBookClick={handleBookClick}
                                    selectedBookAsin={bookSelected}
                                />
                            ))
                        ) : (
                            <div className="min-vh-100 text-center">
                                <p className="text-center text-danger mt-4">Nessun libro trovato con questo titolo.</p>
                            </div>
                        )}
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <CommentArea selectedBook={bookSelected} />
                </Col>
            </Row>
        </Container>
    );
};

export default BookList;
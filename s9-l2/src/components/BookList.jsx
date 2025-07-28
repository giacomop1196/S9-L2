import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";


class BookList extends Component {

    state = {
        searchForm: '',
        bookSelected: ''
    }

    searchChange = (e) => {
        this.setState({ searchForm: e.target.value });
    };

    handleBookClick = (asin) => {
        this.setState({ bookSelected: asin });
    }

    render() {

        //Lista dei libri in base al genere scelto in Welcome
        const currentGender = this.props.gender


        const { searchForm, bookSelected } = this.state;

        // Libri per titolo
        // Converto in minuscolo per evitare errori
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
                                <Form.Control type="text" placeholder="Titolo Libro" value={this.state.searchForm}
                                    onChange={this.searchChange} />
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
                <Row>
                    <Col>

                        {filteredBooks.length > 0 ? (filteredBooks.map((book) => (
                            <SingleBook book={book} key={book.asin} onBookClick={this.handleBookClick} selectedBookAsin={bookSelected} />)))
                            :
                            (<div className="min-vh-100 text-center">
                                <p className="text-center text-danger mt-4">Nessun libro trovato con questo titolo.</p>
                            </div>
                            )}
                    </Col>
                    <Col>
                        <CommentArea selectedBook={this.state.bookSelected} />
                    </Col>
                </Row>



            </Container>
        )
    }
}

export default BookList
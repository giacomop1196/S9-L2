import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Button } from "react-bootstrap";


class BookList extends Component {

    state = {
        searchForm: ''
    }

    searchChange = (e) => {
        this.setState({ searchForm: e.target.value });
    };

    render() {

        //Lista dei libri in base al genere scelto in Welcome
        const currentGender = this.props.gender

        return (

            <Container className="mt-2">
                <Row>

                    <Form className="mb-3">
                        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                            <Form.Label>Cerca per titolo</Form.Label>
                            <Form.Control type="text" placeholder="Titolo Libro" value={this.state.searchForm}
                                onChange={this.searchChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Cerca
                        </Button>
                    </Form>

                    {currentGender.map((book) => {
                        return (
                            <SingleBook book={book} key={book.asin} />)
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList
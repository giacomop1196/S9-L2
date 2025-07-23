import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";


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

        const {searchForm} = this.state;

        // Libri per titolo
        // Converto in minuscolo per evitare errori
        const filteredBooks = currentGender.filter((book) =>
            book.title.toLowerCase().includes(searchForm.toLowerCase())
        );

        return (

            <Container className="mt-2">
                <Row>

                    <Form className="mb-3">
                        <Form.Group className="mb-3 text-center">
                            <Form.Label>Cerca per titolo</Form.Label>
                            <Form.Control type="text" placeholder="Titolo Libro" value={this.state.searchForm}
                                onChange={this.searchChange} />
                        </Form.Group>
                    </Form>
                    
          {filteredBooks.length > 0 ? ( filteredBooks.map((book) => (
              <SingleBook book={book} key={book.asin} />)))
              :
              (<p className="text-center text-danger mt-4">Nessun libro trovato con questo titolo.</p>
          )}
                   
                </Row>
            </Container>
        )
    }
}

export default BookList
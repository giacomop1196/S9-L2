import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasyBook from '../data/fantasy.json'
import { Container, Row } from "react-bootstrap";

class BookList extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    {fantasyBook.map((book) => {
                       return (
                        <SingleBook book={book} />)
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList
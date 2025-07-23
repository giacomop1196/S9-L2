import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

class BookList extends Component {

    render() {
        const currentGender = this.props.gender
        return (
            
            <Container className="mt-5">
                <Row>
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
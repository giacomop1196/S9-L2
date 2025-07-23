import { Alert, Container, Row, Button } from 'react-bootstrap'
import { Component } from 'react'
import BookList from './BookList'
import fantasyBook from '../data/fantasy.json'
import historyBook from '../data/history.json'
import horrorBook from '../data/horror.json'
import romanceBook from '../data/romance.json'
import scifiBook from '../data/scifi.json'

class Welcome extends Component {

    state = {
        gender: fantasyBook
    }

    changeBookList = (genderList) => {
        this.setState({
            gender: genderList
        })
    }

    render() {
        const currentGender = this.state.gender
        return (
            <Container className="mt-5">
                <Row>
                    <Alert variant="success">
                        <Alert.Heading className='text-center'>Libreria Epicode</Alert.Heading>
                        <p className='text-center'>
                            Scegli il genere che preferisci leggere!
                        </p>
                        <div className='d-flex justify-content-center'>
                            <Button variant="dark" className='me-2' onClick={() => this.changeBookList(fantasyBook)}>Fanatasy</Button>
                            <Button variant="dark" className='me-2' onClick={() => this.changeBookList(historyBook)}>Storia</Button>
                            <Button variant="dark" className='me-2' onClick={() => this.changeBookList(horrorBook)}>Horror</Button>
                            <Button variant="dark" className='me-2' onClick={() => this.changeBookList(romanceBook)}>Romantico</Button>
                            <Button variant="dark" className='me-2' onClick={() => this.changeBookList(scifiBook)}>Scifi</Button>
                        </div>
                    </Alert>
                </Row>
                <BookList gender={currentGender} />
            </Container>
        )
    }
}
export default Welcome
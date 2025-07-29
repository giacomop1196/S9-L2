import { useState } from 'react';
import { Alert, Container, Row, Button } from 'react-bootstrap';
import BookList from './BookList';
import fantasyBook from '../data/fantasy.json';
import historyBook from '../data/history.json';
import horrorBook from '../data/horror.json';
import romanceBook from '../data/romance.json';
import scifiBook from '../data/scifi.json';

const Welcome = () => {

    const [currentGender, setCurrentGender] = useState(fantasyBook);

    const changeBookList = (genderList) => {
        setCurrentGender(genderList);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Alert variant="success">
                    <Alert.Heading className='text-center'>Libreria Epicode</Alert.Heading>
                    <p className='text-center'>
                        Scegli il genere che preferisci leggere!
                    </p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="dark" className='me-2' onClick={() => changeBookList(fantasyBook)}>Fantasy</Button>
                        <Button variant="dark" className='me-2' onClick={() => changeBookList(historyBook)}>Storia</Button>
                        <Button variant="dark" className='me-2' onClick={() => changeBookList(horrorBook)}>Horror</Button>
                        <Button variant="dark" className='me-2' onClick={() => changeBookList(romanceBook)}>Romantico</Button>
                        <Button variant="dark" className='me-2' onClick={() => changeBookList(scifiBook)}>Scifi</Button>
                    </div>
                </Alert>
            </Row>
            <BookList gender={currentGender} />
        </Container>
    );
};

export default Welcome;
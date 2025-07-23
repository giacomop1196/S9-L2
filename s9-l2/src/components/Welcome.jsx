import { Alert, Container, Row } from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Alert variant="success">
                    <Alert.Heading className='text-center'>Libreria Epicode</Alert.Heading>
                    <p className='text-center'>
                        Scegli il genere che preferisci leggere!
                    </p>
                </Alert>
            </Row>
        </Container>
    )
}
export default Welcome
import { Component } from "react";
import { Form, Button } from 'react-bootstrap'


const initialFormValues = {
    comment: '',
    rate: '',
    elementId: ''
}

class AddComment extends Component {

    state = {
        formValues: initialFormValues,
    }

    componentDidMount() {
        console.log(this.props.commentId)
        this.setState(prevState => ({
            formValues: {
                ...prevState.formValues,
                elementId: this.props.commentId
            }
        }));

    }


    submitForm = (e) => {
        e.preventDefault()

        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: 'POST',
            body: JSON.stringify(this.state.formValues),
            headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"

            }
        })
            .then((res) => {
                if (res.ok) {
                    alert('RECENSIONE SALVATA!')
                    this.setState({
                        formValues: initialFormValues,
                    })
                } else {
                    throw new Error('Errore nella richiesta')
                }
            })
            .catch((err) => {
                console.log('errore', err)
                alert('RECENSIONE NON SALVATA!')
            })
    }

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Lascia un commento</Form.Label>
                    <Form.Control as="textarea" required rows={3} value={this.state.formValues.comment}
                        onChange={(e) => {
                            this.setState({
                                formValues: {
                                    ...this.state.formValues,
                                    comment: e.target.value,
                                },
                            })
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dai un voto da 1 a 5</Form.Label>
                    <Form.Control type="number" required value={this.state.formValues.rate}
                        onChange={(e) => {
                            this.setState({
                                formValues: {
                                    ...this.state.formValues,
                                    rate: e.target.value,
                                },
                            })
                        }}
                    />
                </Form.Group>
                <Button variant="light" type="submit">Salva</Button>
            </Form>
        )
    }

}

export default AddComment
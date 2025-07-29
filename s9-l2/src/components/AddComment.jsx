import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';

const initialFormValues = {
    comment: '',
    rate: '',
    elementId: ''
};

const AddComment = ({ commentId, onCommentAdded }) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    useEffect(() => {
        setFormValues(prevState => ({
            ...prevState,
            elementId: commentId
        }));
    }, [commentId]);

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
                method: 'POST',
                body: JSON.stringify(formValues),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
                }
            });

            if (res.ok) {
                alert('RECENSIONE SALVATA!');
                setFormValues(initialFormValues);
                if (onCommentAdded) {
                    onCommentAdded();
                }
            } else {
                throw new Error('Errore nella richiesta');
            }
        } catch (err) {
            console.error('Errore:', err);
            alert('RECENSIONE NON SALVATA!');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Form onSubmit={submitForm}>
            <Form.Group className="mb-3">
                <Form.Label>Lascia un commento</Form.Label>
                <Form.Control
                    as="textarea"
                    required
                    rows={3}
                    name="comment"
                    value={formValues.comment}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Dai un voto da 1 a 5</Form.Label>
                <Form.Control
                    type="number"
                    required
                    name="rate"
                    value={formValues.rate}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="light" type="submit">Salva</Button>
        </Form>
    );
};

export default AddComment;
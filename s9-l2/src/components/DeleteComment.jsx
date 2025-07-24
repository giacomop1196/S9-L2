import { Component } from "react";
import { Button } from "react-bootstrap";

class DeleteComment extends Component {

    // Funzione per eliminare il commento con id passato da props
    deleteComment = (commentId) => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + commentId,
            {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
                }
            }
        )
            .then((response) => {
                if (response.ok) {
                    alert('RECENSIONE ELIMINATA!')
                } else {
                    throw new Error('Errore in fase di eliminazione')
                }
            })
            .catch((err) => {
                console.log('ERRORE ELIMINAZIONE', err)
            })
    }

    render() {
        return (
            <Button variant="danger" className="mt-2" onClick={() => {
                this.deleteComment(this.props.commentId)
            }}>X</Button>
        )

    }
}

export default DeleteComment
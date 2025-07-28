import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {

    state = {
        reviewList: []
    }

    getComment = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.selectedBook, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero delle recensioni')
            })
            .then((review) => {
                this.setState({ reviewList: review })
            })
            .catch()
    }


    // NUOVO METODO: Funzione per ricaricare i commenti
    handleCommentSubmitted = () => {
        this.getComment(); // Ricarica la lista dei commenti
    }

    componentDidMount() {
        this.getComment()
    }

    componentDidUpdate(prevProps) {

        if (prevProps.selectedBook !== this.props.selectedBook) {
            this.getComment()

        }

    }

    render() {

        const { reviewList } = this.state
        const { selectedBook } = this.props;
        return (
           <>
                {selectedBook ? ( // Se selectedBook esiste, mostra i componenti
                    <>
                        <CommentsList comment={reviewList} />
                        <AddComment commentId={selectedBook} onCommentAdded={this.handleCommentSubmitted}/>
                    </>
                ) : ( // Altrimenti, mostra un messaggio
                    <div className="text-center mt-4">
                        <p className="text-muted">Seleziona un libro per visualizzare le recensioni e aggiungerne una.</p>
                    </div>
                )}
            </>
        );
    }
}

export default CommentArea
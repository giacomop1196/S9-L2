import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {

    state = {
        reviewList: []
    }

    getComment = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.commentId, {
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

    componentDidMount() {
        this.getComment()
    }

    render() {

        const { reviewList } = this.state
        return (
            <>
                <CommentsList comment={reviewList} />
            </>
        );
    }
}

export default CommentArea
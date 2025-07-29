import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ selectedBook }) => {
    const [reviewList, setReviewList] = useState([]);

    const getComment = () => {
        if (!selectedBook) {
            setReviewList([]);
            return;
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments/" + selectedBook, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Errore nel recupero delle recensioni');
            })
            .then((review) => {
                setReviewList(review);
            })
            .catch((error) => {
                console.error("Errore:", error);
            });
    };

    const handleCommentSubmitted = () => {
        getComment();
    };

    useEffect(() => {
        getComment();
    }, [selectedBook]);

    return (
        <>
            {selectedBook ? (
                <>
                    <CommentsList comment={reviewList} />
                    <AddComment commentId={selectedBook} onCommentAdded={handleCommentSubmitted} />
                </>
            ) : (
                <div className="text-center mt-4">
                    <p className="text-muted">Seleziona un libro per visualizzare le recensioni e aggiungerne una.</p>
                </div>
            )}
        </>
    );
};

export default CommentArea;
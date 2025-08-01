import DeleteComment from "./DeleteComment";

const CommentsList = ({ comment: reviews }) => {
    return (
        <div className="mt-3">
            {reviews.map((review) => (
                <div
                    key={review._id}
                    className="mb-2 w-100 bg-black p-1 rounded-2 text-white text-center"
                >
                    <p className="my-0">Commento: {review.comment}</p>
                    <p className="my-0">Voto: {review.rate}</p>
                    <DeleteComment className="mt-2" commentId={review._id} />
                </div>
            ))}
        </div>
    );
};

export default CommentsList;
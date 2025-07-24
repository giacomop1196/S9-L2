import { Component } from "react";

class CommentsList extends Component {

    render() {

        const reviews = this.props.comment;

        return (
            <div className="mt-3">
                {reviews.map((review) => {
                    console.log(review);
                    return (
                        <div
                            key={review._id}
                            className="mb-2 w-100 bg-black p-1 rounded-2 text-white text-center"
                        >
                            <p>Commento: {review.comment}</p>
                            <p>Voto: {review.rate}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CommentsList
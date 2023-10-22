import Comments from "../Comments/Comments";
import CommentsForm from "../CommentsForm/CommentsForm";

export default function CommentsSection({ comments }) {
    return (
        <>
            <CommentsForm />
            <Comments comments={comments} />
        </>
    )
}
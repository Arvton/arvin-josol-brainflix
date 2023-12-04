import Comments from "../Comments/Comments";
import CommentsForm from "../CommentsForm/CommentsForm";

export default function CommentsSection({ comments, handleNewComment, videoId }) {

    return (
        <>
            <CommentsForm videoId={videoId} handleNewComment={handleNewComment} />
            <Comments videoId={videoId} comments={comments} handleRefreshComment={handleNewComment}/>
        </>
    )
}
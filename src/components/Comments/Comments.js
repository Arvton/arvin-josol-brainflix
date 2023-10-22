import Avatar from "../Avatar/Avatar"
import "./Comments.scss"

export default function Comments({ comments }) {
    return (
        <>
            {
                comments.map((comment) => {
                    const date = new Date(comment.timestamp)
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                    const day = date.getDate();
                    const formattedDate = `${month}/${day}/${year}`
                    return (
                        <>
                            <div className="videos__comment-card">
                                <Avatar className="videos__comment-avatar" />
                                <div className="videos__comment-container">
                                    <div className="videos__comment-data">
                                        <p className="videos__comment-username">{comment.name}</p>
                                        <p className="videos__comment-timestamp">{formattedDate}</p>
                                    </div>
                                    <p className="videos__comment-text">{comment.comment}</p>
                                </div>
                            </div>
                            <div className="videos__comment-divider"></div>
                        </>
                    )
                }
                )
            }
        </>
    )
}
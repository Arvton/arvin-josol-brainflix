import { Fragment } from "react";
import Avatar from "../Avatar/Avatar"
import deleteIcon from "../../assets/images/icons/icon-delete.svg"
import api from '../../components/utils/utils.json'
import axios from "axios";
import "./Comments.scss"

export default function Comments({ comments, videoId, handleRefreshComment }) {
    return (
        <>
            {
                comments.map((comment) => {
                    const date = new Date(comment.timestamp)
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                    const day = date.getDate();
                    const formattedDate = `${month}/${day}/${year}`
                    const handleDeleteComment = () => {
                        axios.delete(`${api.baseUrl}${api.videosEndpoint}${videoId}/comments/${comment.id}`)
                            .then(response => {
                                const sortedComments = response.data.sort((y, x) => {
                                    return x.timestamp - y.timestamp
                                })
                                handleRefreshComment(sortedComments)
                            })
                    }
                    return (
                        <Fragment key={comment.id}>
                            <div className="videos__comment-card">
                                <Avatar className="videos__comment-avatar" />
                                <div className="videos__comment-container">
                                    <div className="videos__comment-data">
                                        <p className="videos__comment-username">{comment.name}</p>
                                        <p className="videos__comment-timestamp">{formattedDate}</p>
                                    </div>
                                    <p className="videos__comment-text">{comment.comment}</p>
                                </div>
                                <img src={deleteIcon} alt="delete icon" onClick={handleDeleteComment}></img>
                            </div>
                            <div className="videos__comment-divider"></div>
                        </Fragment>
                    )
                }
                )
            }
        </>
    )
}
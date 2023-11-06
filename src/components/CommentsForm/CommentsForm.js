import profilePicture from '../../assets/images/Mohan-muruge.jpg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { useState } from 'react';
import axios from "axios"
import api from "../utils/utils.json"
import './CommentsForm.scss'

export default function CommentsForm({ handleNewComment, videoId }) {
    const [commentInput, setCommentInput] = useState("")
    const handleCommentInput = (e) => {
        setCommentInput(e.target.value)
    }
    const handleCommentSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            name: "User",
            comment: commentInput
        }
        axios.post(`${api.baseUrl}${api.videosEndpoint}/${videoId}/comments${api.apiKey}`, newComment)
            .then((response) => {
                setCommentInput("")
                handleNewComment(response.data)
            })
    }
    return (
        <>
            <form action="" className="videos__comments-form">
                <Avatar className='videos__form-avatar' src={profilePicture} />
                <div className="videos__form-container">
                    <label className="videos__form-label" htmlFor="input-comment">JOIN THE CONVERSATION</label>
                    <textarea className="videos__form-input videos__form-input--comment" type="text" id="input-comment" name="comment" placeholder="Add a new comment" onChange={handleCommentInput} value={commentInput} ></textarea>
                    <Button className='videos__form-button' buttonContent='COMMENT' onClick={handleCommentSubmit} />
                </div>
            </form>
            <div className="videos__form-divider"></div>
        </>
    )
}
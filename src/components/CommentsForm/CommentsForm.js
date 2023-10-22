import profilePicture from '../../assets/images/Mohan-muruge.jpg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './CommentsForm.scss'

export default function CommentsForm() {
    return (
        <>
            <form action="" className="videos__comments-form">
                <Avatar className='videos__form-avatar' src={profilePicture} />
                <div className="videos__form-container">
                    <label className="videos__form-label" htmlFor="input-comment">JOIN THE CONVERSATION</label>
                    <textarea className="videos__form-input videos__form-input--comment" type="text" id="input-comment" name="comment" placeholder="Add a new comment"></textarea>
                    <Button className='videos__form-button' buttonContent='COMMENT' />
                </div>
            </form>
            <div className="videos__form-divider"></div>
        </>
    )
}
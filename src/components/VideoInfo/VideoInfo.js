import eyeIcon from '../../assets/images/icons/views.svg'
import heartIcon from '../../assets/images/icons/likes.svg'
import './VideoInfo.scss'

export default function VideoInfo({ title, channel, timestamp, views, likes, description, totalComments }) {
    const date = new Date(timestamp)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,"0");
    const day = date.getDate();
    const formattedDate = `${month}/${day}/${year}`
    return (
        <div className="videos__current">
            <h1 className="videos__title">{title}</h1>
            <div className="videos__divider videos__divider--title"></div>
            <div className="videos__info">
                <div className="videos__publisher">
                    <p className="videos__channel">By {channel}</p>
                    <p className="videos__date">{formattedDate}</p>
                </div>
                <div className="videos__performance">
                    <div className="videos__views">
                        <img src={eyeIcon} alt="eye icon"></img>
                        <p className="videos__views--text">{views}</p>
                    </div>
                    <div className="videos__likes">
                        <img src={heartIcon} alt="heart icon"></img>
                        <p className="videos__likes--text">{likes}</p>
                    </div>
                </div>
            </div>
            <div className="videos__divider"></div>
            <p className="videos__description">{description}</p>
            <p className="videos__total-comments">{totalComments} Comments</p>
        </div>

    )
}
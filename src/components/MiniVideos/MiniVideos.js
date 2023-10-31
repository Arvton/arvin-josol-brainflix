import "./MiniVideos.scss"

export default function MiniVideos({ changeCurrentVideoId, id, title, channel, thumbnail }) {
    const clickHandler = (event) => {
        const id = event.target.id
        changeCurrentVideoId(id)
    }
    return (
        <div onClick={clickHandler} className="videos__next-card" id={id}>
            <img className="videos__next-thumbnail" src={thumbnail} alt={`${id} thumbnail`} id={id}></img>
            <div className="videos__next-details" id={id}>
                <p className="videos__next-title" id={id}>{title}</p>
                <p className="videos__next-channel" id={id}>{channel}</p>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import "./MiniVideos.scss"

export default function MiniVideos({ id, title, channel, thumbnail }) {
    return (
        <Link to={`/videos/${id}`} className="videos__next-card" key={id}>
            <img className="videos__next-thumbnail" src={thumbnail} alt={`${id} thumbnail`}></img>
            <div className="videos__next-details">
                <p className="videos__next-title">{title}</p>
                <p className="videos__next-channel">{channel}</p>
            </div>
        </Link>
    )
}
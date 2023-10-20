import './VideoPlayer.scss'

export default function VideoPlayer({ thumbnail }) {
    return (
        <>
        <video className="videos__player" poster={thumbnail} controls></video>
        </>
    )
}
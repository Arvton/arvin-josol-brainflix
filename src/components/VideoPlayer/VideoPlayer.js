import './VideoPlayer.scss'

export default function VideoPlayer({ thumbnail, source }) {
    return (
        <>
            <video className="videos__player" poster={thumbnail} src={source} controls></video>
        </>
    )
}
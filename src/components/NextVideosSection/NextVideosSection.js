import MiniVideos from "../MiniVideos/MiniVideos";
import "./NextVideosSection.scss"

export default function NextVideos({ nextVideosList, currentVideoId }) {
    return (
        <>
            <h3 className="videos__section-title">NEXT VIDEOS</h3>
            {
                nextVideosList.filter((video) => {
                    return video.id !== currentVideoId
                }).map((video) => (
                    <MiniVideos
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        channel={video.channel}
                        thumbnail={video.image}
                    />
                ))
            }
        </>
    )
}
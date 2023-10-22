import CommentsSection from "../CommentsSection/CommentsSection";
import VideoInfo from "../VideoInfo/VideoInfo";

export default function MainVideo(props) {
    const { currentVideoData } = props
    return (
        <>
            <VideoInfo
                title={currentVideoData.title}
                channel={currentVideoData.channel}
                timestamp={currentVideoData.timestamp}
                views={currentVideoData.views}
                likes={currentVideoData.likes}
                description={currentVideoData.description}
                totalComments={currentVideoData.comments.length}
            />
            <CommentsSection comments={currentVideoData.comments} />
        </>

    )
}
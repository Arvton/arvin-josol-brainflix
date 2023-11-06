import CommentsSection from "../CommentsSection/CommentsSection";
import VideoInfo from "../VideoInfo/VideoInfo";

export default function MainVideo({ currentVideoData, comments, handleNewComment }) {
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
            <CommentsSection
                comments={comments}
                handleNewComment={handleNewComment}
                videoId={currentVideoData.id}
            />
        </>

    )
}
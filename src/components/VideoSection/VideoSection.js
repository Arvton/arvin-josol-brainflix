import MainVideo from "../MainVideo/MainVideo";
import NextVideos from "../NextVideosSection/NextVideosSection";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function VideoSection() {
    return (
        <section className="videos">
            <VideoPlayer />
            <div>
                <MainVideo />
                <NextVideos />
            </div>
        </section>
    )
}
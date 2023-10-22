import mainVideoData from '../../data/video-details.json'
import nextVideosList from '../../data/videos.json'
import MainVideo from "../MainVideo/MainVideo";
import NextVideos from "../NextVideosSection/NextVideosSection";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useState } from 'react';
import './VideoSection.scss'

export default function VideoSection() {
    // initializes current video id as first video in videos list
    const [currentVideoId, setCurrentVideoId] = useState(nextVideosList[0].id)
    // initializes current video data to be video-info/object with matching id from next video list
    const [currentVideoData, setMainVideo] = useState(mainVideoData.find((data) => data.id === currentVideoId))

    const changeCurrentVideoId = (id => {
        setCurrentVideoId(id)
        const newVideoData = mainVideoData.find((data) => data.id === id)
        setMainVideo(newVideoData)
    })

    return (
        <section className="videos">
            <VideoPlayer thumbnail={currentVideoData.image} />
            <div className="videos__container">
                <div className="videos__current">
                    <MainVideo currentVideoData={currentVideoData} />
                </div>
                <div className="videos__next">
                    <NextVideos
                        nextVideosList={nextVideosList}
                        changeCurrentVideoId={changeCurrentVideoId}
                        currentVideoId={currentVideoId}
                    />
                </div>
            </div>
        </section>
    )
}
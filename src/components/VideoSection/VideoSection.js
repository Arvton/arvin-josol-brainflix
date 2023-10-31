import api from '../../components/utils/utils.json'
import MainVideo from "../MainVideo/MainVideo";
import NextVideos from "../NextVideosSection/NextVideosSection";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useState, useEffect } from 'react';
import axios from "axios";
import './VideoSection.scss'

export default function VideoSection() {
    // test getting data and logging it on the console. this is the next videos data
    const [nextVideoList, setNextVideoList] = useState([])
    // initializes current video id as first video in videos list
    const [currentVideoId, setCurrentVideoId] = useState()
    // initializes current video data to be video-info/object with matching id from next video list
    const [currentVideoData, setCurrentVideoData] = useState()
    useEffect(() => {
        axios.get(`${api.baseUrl}${api.videosEndpoint}${api.apiKey}`)
            .then(response => {
                setNextVideoList(response.data)
                // Set the currentVideoId to the id of the first object in nextVideoList
                if (response.data.length > 0) {
                    setCurrentVideoId(response.data[0].id);
                }
            })
    }, [])

    useEffect(() => {
        // Update currentVideoData when currentVideoId changes
        if (currentVideoId) {
            axios.get(`${api.baseUrl}${api.videosEndpoint}/${currentVideoId}${api.apiKey}`)
                .then(response => {
                    setCurrentVideoData(response.data)
                })
        }
    }, [currentVideoId]);

    const changeCurrentVideoId = (id => {
        setCurrentVideoId(id)
    })

    return (
        <main>
            <section className="videos">
                {currentVideoData && <VideoPlayer thumbnail={currentVideoData.image} />}
                <div className="videos__container">
                    <div className="videos__current">
                        {currentVideoData && <MainVideo currentVideoData={currentVideoData} />}
                    </div>
                    <div className="videos__next">
                        {nextVideoList && <NextVideos
                            nextVideosList={nextVideoList}
                            changeCurrentVideoId={changeCurrentVideoId}
                            currentVideoId={currentVideoId}
                        />}
                    </div>
                </div>
            </section>
        </main>
    )
}
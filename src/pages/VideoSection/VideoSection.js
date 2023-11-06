import api from '../../components/utils/utils.json'
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideosSection/NextVideosSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './VideoSection.scss'

export default function VideoSection() {
    // initialize videoId param. linking to /videos/:videoid should trigger change in currentVideoId
    const { videoId } = useParams()
    // initialize next video list. will be populated by first useEffect
    const [nextVideoList, setNextVideoList] = useState([])
    // initializes current video id as first video in videos list
    const [currentVideoId, setCurrentVideoId] = useState()
    // initializes current video data to be video-info/object with matching id from next video list
    const [currentVideoData, setCurrentVideoData] = useState()
    // test new comments
    const [comments, setComments] = useState([])
    // gets list of videos and sets the current video id to the id of the first video 
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
                    console.log(response.data)
                    setCurrentVideoData(response.data)
                    const sortedComments = response.data.comments.sort((y, x) => {
                        return x.timestamp - y.timestamp
                    })
                    setComments(sortedComments)
                })
        }
    }, [currentVideoId]);

    useEffect(() => {
        // Set the currentVideoId to the value from the URL if it exists
        if (videoId) {
            setCurrentVideoId(videoId);
        }
        else if (nextVideoList.length > 0) {
            setCurrentVideoId(nextVideoList[0].id);
        }
    }, [videoId, nextVideoList]);

    const handleNewComment = (newComment) => {
        setComments([newComment, ...comments])
    }

    return (
        <main>
            <section className="videos">
                {currentVideoData && <VideoPlayer thumbnail={currentVideoData.image} source={`${currentVideoData.video}${api.apiKey}`} />}
                <div className="videos__container">
                    <div className="videos__current">
                        {currentVideoData &&
                            <MainVideo currentVideoData={currentVideoData} comments={comments} handleNewComment={handleNewComment} />}
                    </div>
                    <div className="videos__next">
                        {nextVideoList && <NextVideos
                            nextVideosList={nextVideoList}
                            currentVideoId={currentVideoId}
                        />}
                    </div>
                </div>
            </section>
        </main>
    )
}
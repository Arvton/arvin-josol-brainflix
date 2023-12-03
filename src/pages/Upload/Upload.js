import uploadPicture from "../../assets/images/Upload-video-preview.jpg"
import api from '../../components/utils/utils.json'
import Button from "../../components/Button/Button"
import Figure from "../../components/Figure/Figure"
import Input from "../../components/Input/Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import "./Upload.scss"

export default function Upload() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const uploadHandler = () => {
        const newVideo = {
            title: title,
            description: description
        }
        axios.post(`${api.baseUrl}${api.videosEndpoint}`, newVideo)
            .then(response => {
            })
        alert("Upload successful! Returning to Home Page.")
        navigate("/")
    }

    const cancelHandler = () => {
        alert("Upload cancelled. Returning to Home Page.")
        navigate("/")
    }
    return (
        <>
            <div className="upload__divider"></div>
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__container">
                    <Figure src={uploadPicture} className="upload" caption="VIDEO THUMBNAIL" />
                    <form className="upload__form">
                        <div className="upload__form-container">
                            <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                            <Input className='upload__form-input' type='text' id="title" placeholder='Add a title to your video' value={title} onChange={handleTitle} />
                            <label className="upload__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea className='upload__form-textarea' type='text' id="description" placeholder='Add a description to your video' value={description} onChange={handleDescription} ></textarea>
                        </div>
                        <div className="upload__button-container">
                            <Button className='upload__button upload__button--publish' onClick={uploadHandler} buttonContent='PUBLISH' />
                            <Button className='upload__button upload__button--cancel' onClick={cancelHandler} buttonContent='CANCEL' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
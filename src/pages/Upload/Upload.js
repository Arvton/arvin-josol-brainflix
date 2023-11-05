import uploadPicture from "../../assets/images/Upload-video-preview.jpg"
import Button from "../../components/Button/Button"
import Figure from "../../components/Figure/Figure"
import Input from "../../components/Input/Input"
import { useNavigate } from "react-router-dom"
import "./Upload.scss"

export default function Upload() {
    const navigate = useNavigate()

    const uploadHandler = () => {
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
                            <label className="upload__label" htmlFor="input-title">TITLE YOUR VIDEO</label>
                            <Input className='upload__form-input' type='text' placeholder='Add a title to your video' />
                            <label className="upload__label" htmlFor="input-comment">ADD A VIDEO DESCRIPTION</label>
                            <textarea className='upload__form-textarea' type='text' placeholder='Add a description to your video'></textarea>
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
import uploadPicture from "../../assets/images/Upload-video-preview.jpg"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import "./Upload.scss"

export default function Upload() {
    return (
        <>
        <div className="upload__divider"></div>
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                {/* create figure component */}
                <figure className="upload__image-container">
                    <img src={uploadPicture} className="upload__image" alt=""></img>
                    <figcaption className="upload__label">VIDEO THUMBNAIL</figcaption>
                </figure>
                <form className="upload__form">
                    <div className="upload__form-container">
                        <label className="upload__label" htmlFor="input-title">TITLE YOUR VIDEO</label>
                        <Input className='upload__form-input' type='text' placeholder='Add a title to your video' />
                        <label className="upload__label" htmlFor="input-comment">ADD A VIDEO DESCRIPTION</label>
                        <textarea className='upload__form-textarea' type='text' placeholder='Add a description to your video'></textarea>
                    </div>
                    <div className="upload__button-container">
                        <Button className='upload__button upload__button--publish' buttonContent='PUBLISH' />
                        <Button className='upload__button upload__button--cancel' buttonContent='CANCEL' />
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}
import "./Upload.scss"

export default function Upload() {
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                {/* create figure component */}
                <figure className="upload__image">
                    <img alt=""></img>
                    <figcaption>Test</figcaption>
                </figure>
                <form className="upload__form">
                    <div className="upload__form-container">
                        <label className="upload__form-label" htmlFor="input-title">TITLE YOUR VIDEO</label>
                        <input className="upload__form-input upload__form-input--title" type="text" id="input-title"
                            name="title" placeholder="Add a title to your video" />
                        <label className="upload__form-label" htmlFor="input-comment">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__form-input upload__form-input--description" type="text" id="input-description"
                            name="description" placeholder="Add a a description to your video"></textarea>
                    </div>
                    <div className="upload__buttons">
                        {/* add button component, give props */}
                        <button>PUBLISH</button>
                        {/* add button component, give props */}
                        <button>CANCEL</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
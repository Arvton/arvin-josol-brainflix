export default function Figure({ src, className, caption }) {
    return (
        <figure className={`${className}__image-container`}>
            <img src={src} className={`${className}__image`} alt="upload video thumbnail"></img>
            <figcaption className={`${className}__label`}>{caption}</figcaption>
        </figure>
    )
}
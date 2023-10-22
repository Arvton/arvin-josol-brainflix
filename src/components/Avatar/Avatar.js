import './Avatar.scss'

export default function Avatar({ src, className }) {
    const srcGiven = src
    return (
        <>
        {srcGiven && <img src={src} className={`${className} avatar`} alt='avatar'></img>}
        {!srcGiven && <div className={`${className} avatar avatar--placeholder`} alt='avatar-placeholder'></div>}
        </>
    )
}
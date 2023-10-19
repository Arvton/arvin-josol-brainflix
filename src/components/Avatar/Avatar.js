import './Avatar.scss'

export default function Avatar({ src, className }) {
    return (
        <img src={src} className={`${className} avatar`} alt='avatar'></img>
    )
}
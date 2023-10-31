import './Button.scss'

export default function Button({ className, buttonContent, onClick }) {
    return (
        <button className={`${className} button`} onClick={onClick}>{buttonContent}</button>
    )
}
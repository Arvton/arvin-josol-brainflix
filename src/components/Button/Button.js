import './Button.scss'

export default function Button({ className, buttonContent }) {
    return (
        <button className={`${className} button`}>{buttonContent}</button>
    )
}
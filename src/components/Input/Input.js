import './Input.scss'

export default function Input({ className, type, placeholder }) {
    return (
        <input className={`${className} input`} type={type} placeholder={placeholder} />
    )
}
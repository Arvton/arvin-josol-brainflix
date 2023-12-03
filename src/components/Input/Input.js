import './Input.scss'

export default function Input({ className, type, placeholder, id, value, onChange }) {
    const idGiven = id
    return (
        <>
            {idGiven && <input className={`${className} input`} type={type} placeholder={placeholder} id={id} value={value} onChange={onChange}/>}
            {!idGiven && <input className={`${className} input`} type={type} placeholder={placeholder} />}
        </>
    )
}
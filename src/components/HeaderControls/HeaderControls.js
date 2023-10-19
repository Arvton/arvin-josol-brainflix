import profilePicture from '../../assets/images/Mohan-muruge.jpg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './HeaderControls.scss'

export default function HeaderControls() {
    return (
        <div className='header__controls'>
            <form className="header__search">
                <Input className='header__search--input' type='search' placeholder='Search'/>
            </form>
            <Button className='header__upload' buttonContent='UPLOAD' />
            <Avatar className='header__avatar' src={profilePicture} />
        </div>
    )
}
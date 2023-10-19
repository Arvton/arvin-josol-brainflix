import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import './Logo.scss';

export default function Logo() {
    return(
        <img src={logo} className="header__logo" alt="logo"></img>
    )
}
import Logo from "../Logo/Logo";
import HeaderControls from "../HeaderControls/HeaderControls";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <HeaderControls />
        </header>
    )
}
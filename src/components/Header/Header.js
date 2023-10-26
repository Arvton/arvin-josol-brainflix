import Logo from "../Logo/Logo";
import HeaderControls from "../HeaderControls/HeaderControls";
import { Link } from "react-router-dom";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <Link to="/"><Logo /></Link>
            <HeaderControls />
        </header>
    )
}
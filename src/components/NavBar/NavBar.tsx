import Button from "../Button/Button";
import Logo from "../Utils/Logo/Logo";

function NavBar() {
    return (
        <nav className="bg-dark p-4">
            <Logo />
            <div className="flex justify-end gap-10">
                <Button text="Home" bg="#96d2fa" textColor="#000"/>
                <Button text="About" />
            </div>
        </nav>
    )
}

export default NavBar;
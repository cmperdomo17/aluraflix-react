import Button from "../../components/Button/Button";
import Logo from "../../components/Utils/Logo/Logo";
import { useState } from "react";

function NavBar() {
    const [activeButton, setActiveButton] = useState("Home");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    }

    return (
        <nav className="bg-dark p-4 flex justify-between">
            <Logo />
            <div className="flex justify-end gap-10">
                <Button 
                    text="Home"
                    isActive={activeButton === "Home"}
                    onClick={() => handleButtonClick("Home")}
                />
                <Button
                    text="New Video"
                    isActive={activeButton === "New Video"}
                    onClick={() => handleButtonClick("New Video")}
                />
            </div>
        </nav>
    )
}

export default NavBar;
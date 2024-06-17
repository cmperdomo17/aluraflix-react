import Button from "../../components/Button/Button";
import IconCirclePlus from "../../components/Utils/IconCirclePlus/IconCirclePlus";
import IconHome from "../../components/Utils/IconHome/IconHome";
import Logo from "../../components/Utils/Logo/Logo";

import { useState } from "react";

function NavBar() {
    const [activeButton, setActiveButton] = useState("Home");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    }

    return (
        <nav className="bg-dark p-4 flex navbar-shadow border-b-4 border-tertiary justify-center md:justify-between">
            <div className="hide-on-mobile">
                <Logo />
            </div>

            <div className="flex justify-end gap-10 buttons-svg-mobile">
                <Button
                    svg= {<IconHome />}
                    text="Home"
                    isActive={activeButton === "Home"}
                    onClick={() => handleButtonClick("Home")}
                />
                <Button
                    svg= {<IconCirclePlus />}
                    text="New Video"
                    isActive={activeButton === "New Video"}
                    onClick={() => handleButtonClick("New Video")}
                />
            </div>
        </nav>
    )
}

export default NavBar;
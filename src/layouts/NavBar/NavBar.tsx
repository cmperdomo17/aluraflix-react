import Button from "../../components/Button/Button";
import IconCirclePlus from "../../components/Utils/IconCirclePlus/IconCirclePlus";
import IconHome from "../../components/Utils/IconHome/IconHome";
import Logo from "../../components/Utils/Logo/Logo";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import { useState } from "react";

function NavBar() {
    const [activeButton, setActiveButton] = useState("Home");
    const [showModal, setShowModal] = useState(false);

    const activateButton = (buttonName: string) => setActiveButton(buttonName);
    const toggleModalVisibility = () => {
        if (showModal) {
            setActiveButton("Home");
        }
        setShowModal(!showModal);
    };
    
    const handleButtonClickAndToggleModal = (buttonName: string) => {
        setActiveButton(buttonName);
        setShowModal(!showModal);
    }

    return (
        <>
            <nav className="bg-dark p-4 flex navbar-shadow border-b-4 border-tertiary justify-center md:justify-between">
                <div className="hide-on-mobile">
                    <Logo />
                </div>

                <div className="flex justify-end gap-5 buttons-svg-mobile">
                    <Button
                        svg= {<IconHome />}
                        text="Home"
                        isActive={activeButton === "Home"}
                        onClick={() => activateButton("Home")}

                    />
                    <Button
                        svg= {<IconCirclePlus />}
                        text="New Video"
                        isActive={activeButton === "New Video"}
                        onClick={() => handleButtonClickAndToggleModal("New Video")}
                    />
                </div>
            </nav>
            {showModal && <Modal 
                show={showModal}
                title="Nuevo Video"
                children={
                    <div>
                        <Form />
                    </div>
                } onClose={toggleModalVisibility}
                bgColor="#232323"
                borderColor="#fbf8f3"
            />}
        </>
        

    )
}

export default NavBar;
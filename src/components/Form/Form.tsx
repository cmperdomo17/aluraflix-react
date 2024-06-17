import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import Input from "../Input/Input";
import { useState } from "react";

function Form() {
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);

    return (
        <form className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
                <Input title="Titulo" />
                <Input title="Categoria" />
                <Input title="Imagen" />
                <Input title="Video" />
                <Input title="Descripción" />
            </div>

            <div className="flex justify-center gap-10"> 
                <Button svg={<IconSave />} text="Guardar" isActive={activeButton === "Save"} onClick={() => activateButton("Save")} />
                <Button svg={<IconClean />} text="Limpiar" isActive={activeButton === "Clean"} onClick={() => activateButton("Clean")} />
            </div>
        </form>
    );
}

export default Form;
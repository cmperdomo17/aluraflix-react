import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import CardData from "../../models/CardData";
import { fetchData } from "../../api/Api";
import FormProps from "../../models/FormProps";

function Form({ edit, cardId }: FormProps) {
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);
    const [dataCard, setDataCard] = useState<CardData[]>([]);

    useEffect(() => {
        fetchData().then(data => setDataCard(data));
    }, []);

    return (
        <form className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
                {dataCard.filter(card => card.id === cardId).map(card => (
                    <div key={card.id}>
                        <Input title="Titulo" textValue={edit ? card.title : ""} />
                        <Input title="Categoria" textValue={edit ? card.category : ""} />
                        <Input title="Imagen" textValue={edit ? card.image : ""} /> 
                        <Input title="Video" textValue={edit ? card.video : ""} /> 
                        <Input title="Descripción" textValue={edit ? card.description : ""} /> 
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-10"> 
                <Button svg={<IconSave />} text="Guardar" isActive={activeButton === "Save"} onClick={() => activateButton("Save")} />
                <Button svg={<IconClean />} text="Limpiar" isActive={activeButton === "Clean"} onClick={() => activateButton("Clean")} />
            </div>
        </form>
    );
}

export default Form;
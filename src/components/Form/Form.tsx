import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import CardData from "../../models/CardData";
import FormProps from "../../models/FormProps";
import axios from "axios";

function Form({ edit, cardId }: FormProps) {
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);
    const [dataCard, setDataCard] = useState<CardData[]>([]);

    useEffect(() => {
        axios.get('https://fake-api-aluraflix-theta.vercel.app/card')
            .then(response => {
                setDataCard(response.data);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }, []);

    return (
        <form className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
            {edit ? (
                dataCard.filter(card => card.id === cardId).map(card => (
                <div key={card.id}>
                    <Input title="Titulo" textValue={card.title} />
                    <Input title="Categoria" textValue={card.category} />
                    <Input title="Imagen" textValue={card.image} />
                    <Input title="Video" textValue={card.video} />
                    <Input title="Descripción" textValue={card.description} />
                </div>
                ))
            ) : (
                <>
                    <Input title="Titulo" textValue="" />
                    <Input title="Categoria" textValue="" />
                    <Input title="Imagen" textValue="" />
                    <Input title="Video" textValue="" />
                    <Input title="Descripción" textValue="" />
                </>
            )}
            </div>

            <div className="flex justify-center gap-10"> 
                <Button svg={<IconSave />} text="Guardar" isActive={activeButton === "Save"} onClick={() => activateButton("Save")} />
                <Button svg={<IconClean />} text="Limpiar" isActive={activeButton === "Clean"} onClick={() => activateButton("Clean")} />
            </div>
        </form>
    );
}

export default Form;
import Button from "../Button/Button";
import IconSave from "../Utils/IconSave/IconSave";
import IconClean from "../Utils/IconClean/IconClean";
import Input from "../Input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardData from "../../models/CardData";
import FormProps from "../../models/FormProps";
import { getCards, postCard, putCard } from "../../api/api";
import { v4 as uuidv4 } from "uuid";

function Form({ edit, cardId }: FormProps) {
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);
    const [dataCard, setDataCard] = useState([]);

    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        if (edit && cardId) {
            const card = dataCard.find((card: CardData) => card.id === cardId);
            if (card) {
                Object.keys(card).forEach((key) => {
                    setValue(key, card[key]);
                });
            }
        } else {
            cleanInputs();
        }
    }, [edit, cardId, dataCard, setValue]);

    useEffect(() => {
        getCards().then((data) => setDataCard(data));
    }, []);

    const getDataCards = async () => {
        try {
            const dataCard = await getCards();
            setDataCard(dataCard);
        } catch (error) {
        console.error("Error fetching data", error);
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        try {
            if (edit && cardId) {
                const updatedData = {
                    id: cardId,
                    title: data.title,
                    category: data.category.toUpperCase(),
                    image: data.image,
                    video: data.video,
                    description: data.description,
                };
                await putCard(cardId, updatedData);
                alert("Card creada exitosamente");
                window.location.reload();
            } else {
                const newData = {
                    id: uuidv4(),
                    title: data.title,
                    category: data.category.toUpperCase(),
                    image: data.image,
                    video: data.video,
                    description: data.description,
                };
                await postCard(newData);
                alert("Card editada exitosamente");
                window.location.reload();
            }
        reset();
        getDataCards();
        } catch (error) {
            console.error("Error submitting data", error);
            alert("Error en la creación de la card");
        }
    };

    const cleanInputs = () => {
        reset();
        activateButton("Clean");
    };    

    return (
        <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col">
                <Input title="Titulo" {...register("title")} />
                <Input title="Categoria" {...register("category")} />
                <Input title="Imagen" {...register("image")} />
                <Input title="Video" {...register("video")} />
                <Input title="Descripción" {...register("description")} />
            </div>

            <div className="flex justify-center gap-10">
                <Button
                    svg={<IconSave />}
                    text="Guardar"
                    isActive={activeButton === "Save"}
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                />
                <Button
                    svg={<IconClean />}
                    text="Limpiar"
                    isActive={activeButton === "Clean"}
                    onClick={() => {
                        cleanInputs();
                    }}
                    type="button"
                />
            </div>
        </form>
    );
}

export default Form;
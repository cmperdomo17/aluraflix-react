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
import FormData from "../../models/FormData";

function Form({ edit, cardId }: FormProps) {    
    const [activeButton, setActiveButton] = useState("");
    const activateButton = (buttonName: string) => setActiveButton(buttonName);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [dataCard, setDataCard] = useState([]);
    const [cardEdit, setCardEdit] = useState<CardData | null>(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        getCards().then(data => setDataCard(data));
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
        const id = uuidv4();
        const newData = { id, ...data } as FormData;

        try {
            if (cardEdit) {
                await putCard(cardEdit.id, newData);
                setCardEdit(null);
                reset();
            } else {
                await postCard(newData);
                reset();
            }
            getDataCards();
        } catch (error) {
            console.error("Error submitting data", error);
        }
    };

    // const handleEditCard = (card: CardData) => {
    //     setCardEdit(card);
    //     setValue("title", card.title);
    //     setValue("category", card.category);
    //     setValue("image", card.image);
    //     setValue("video", card.video);
    //     setValue("description", card.description);
    // };

    // const handleCancelEdit = () => {
    //     setCardEdit(null);
    //     reset();
    // };

    return (
        <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
            {edit ? (
                dataCard.filter((card: CardData) => card.id === cardId).map((card: CardData) => (
                <div key={card.id}>
                    <Input title="Titulo" textValue={card.title} setTextValue={setTitle} />
                    <Input title="Categoria" textValue={card.category} setTextValue={setCategory} />
                    <Input title="Imagen" textValue={card.image} setTextValue={setImage} />
                    <Input title="Video" textValue={card.video} setTextValue={setVideo} />
                    <Input title="Descripción" textValue={card.description} setTextValue={setDescription} />
                </div>
                ))
            ) : (
                <>
                    <Input title="Titulo" setTextValue={setTitle} />
                    <Input title="Categoria" setTextValue={setCategory} />
                    <Input title="Imagen" setTextValue={setImage} />
                    <Input title="Video" setTextValue={setVideo} />
                    <Input title="Descripción" setTextValue={setDescription} />
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
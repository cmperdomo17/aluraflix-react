import CardData from "./CardData";

interface CardProps {
    id: string;
    image: string;
    width: string;
    height: string;
    color: string;
    modify: boolean;
    videoUrl?: string;
    onDelete?: (id: string) => void;
    onEdit?: (card: CardData) => void;
}

export default CardProps;
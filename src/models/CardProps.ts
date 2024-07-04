interface CardProps {
    id: string;
    image: string;
    width: string;
    height: string;
    color: string;
    modify: boolean;
    videoUrl?: string;
    onDelete?: (id: string) => void;
}

export default CardProps;
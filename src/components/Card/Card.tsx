import ActionButtons from "../ActionButtons/ActionButtons";

interface CardProps {
    image: string;
    width: string;
    height: string;
    color: string;
    modify: boolean;
}

function Card({ image, width, height, color, modify }: CardProps) {
    return (
        <div className="flex flex-col gap-6">
            <img className="card-img cursor-pointer border-4"
                src={image}
                alt="Card"
                style={{borderColor: color,
                    boxShadow: `0 0 1.2rem ${color}`,
                    width: width,
                    height: height
                }}
            />
            <div className="flex justify-center gap-2">
                {modify && (
                    <ActionButtons borderColor={color}/>
                )}
            </div>
        </div>
    );
}

export default Card;
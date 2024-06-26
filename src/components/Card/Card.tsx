import ActionButtons from "../ActionButtons/ActionButtons";
import CardProps from "../../models/CardProps";


function Card({ id, image, width, height, color, modify, videoUrl }: CardProps) {

    const handleClickVideo = () => {
        window.open(videoUrl, '_blank');
    }

    return (
        <div className="flex flex-col gap-6 items-center">
            <button onClick={handleClickVideo}>
                <img className="card-img cursor-pointer border-4"
                    src={image}
                    alt="Card"
                    style={{borderColor: color,
                        boxShadow: `0 0 1.2rem ${color}`,
                        width: width,
                        height: height
                    }}
                />
            </button>
            <div className="flex justify-center gap-2">
                {modify && (
                    <ActionButtons borderColor={color} cardId={id} />
                )}
            </div>
        </div>
    );
}

export default Card;
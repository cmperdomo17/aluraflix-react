import ActionButtons from "../ActionButtons/ActionButtons";

interface CardProps {
    image: string;
    width: string;
    height: string;
    color: string;
    modify: boolean;
    videoUrl: string;
}

function Card({ image, width, height, color, modify, videoUrl }: CardProps) {

    const handleClickVideo = (e: any) => {
        e.preventDefault();
        window.open(videoUrl, '_blank');
    }

    return (
        <div className="flex flex-col gap-6">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" onClick={handleClickVideo}>
                <img className="card-img cursor-pointer border-4"
                    src={image}
                    alt="Card"
                    style={{borderColor: color,
                        boxShadow: `0 0 1.2rem ${color}`,
                        width: width,
                        height: height
                    }}
                />
            </a>
            <div className="flex justify-center gap-2">
                {modify && (
                    <ActionButtons borderColor={color}/>
                )}
            </div>
        </div>
    );
}

export default Card;
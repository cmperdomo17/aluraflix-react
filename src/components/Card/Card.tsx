import ActionButtons from "../ActionButtons/ActionButtons";

interface CardProps {
    image: string;
    width: string;
    height: string;
    color: string;
    modify: boolean;
}

function Card(props: CardProps) {
    return (
        <div className="flex flex-col gap-6">
            <img className="card-img cursor-pointer border-4"
                src={props.image}
                alt="Card"
                style={{borderColor: props.color,
                    boxShadow: `0 0 1.2rem ${props.color}`,
                    width: props.width,
                    height: props.height
                }}
            />
            <div className="flex justify-center gap-2">
                {props.modify && (
                    <ActionButtons borderColor={props.color}/>
                )}
            </div>
        </div>
    );
}

export default Card;
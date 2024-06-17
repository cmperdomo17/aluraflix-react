interface CardProps {
    image: string;
    width: string;
    height: string;
    color?: string;
    alt: string;
}

function Card(props: CardProps) {
    return (
        <div>
            <img className="card-img cursor-pointer border-4"
                src={props.image}
                alt={props.alt} 
                style={{borderColor: props.color,
                    boxShadow: `0 0 2rem ${props.color}`,
                    width: props.width,
                    height: props.height
                }}
            />
        </div>
    );
}

export default Card;
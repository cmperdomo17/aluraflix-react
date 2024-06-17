interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    alt?: string;
}

function Card(props: CardProps) {
    return (
        <div>
            <img className="card-img cursor-pointer" src={props.image} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;
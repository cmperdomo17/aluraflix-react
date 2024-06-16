interface ButtonProps {
    svg: JSX.Element;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

function Button(props: ButtonProps) {

    const activeStyle = {
        backgroundColor: "#214987",
        color: "#eff8ff",
        borderColor: "#eff8ff"
    };

    const defaultStyles = {
        backgroundColor: "transparent",
        color: "inherit",
        borderColor: "inherit",
    };

    return (
        <button style={props.isActive ? activeStyle : defaultStyles}
                className={`button-alura ${props.isActive ? "active" : "inactive"} flex justify-center items-center gap-2 text-gray-300 border-gray-300 hover:border-white hover:text-white px-3 md:px-6 py-1 rounded-lg font-semibold text-sm`}
                onClick={props.onClick}
        >
            {props.svg}
            {<span className={`button-text ${props.isActive ? "active" : "inactive"}`}>{props.text}</span>}
        </button>
    );
}

export default Button;
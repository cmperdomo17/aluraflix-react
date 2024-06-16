interface ButtonProps {
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
                className="text-gray-300 border-gray-300 hover:border-white hover:text-white px-6 py-1 border-2 rounded-lg font-semibold text-sm button-alura"
                onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;
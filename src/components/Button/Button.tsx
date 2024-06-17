interface ButtonProps {
    svg: JSX.Element;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

function Button({ svg, text, isActive, onClick }: ButtonProps) {

    const activeStyle = {
        backgroundColor: "#297ae5",
        color: "#eff8ff",
        borderColor: "#eff8ff"
    };

    const defaultStyles = {
        backgroundColor: "transparent",
        color: "inherit",
        borderColor: "inherit",
    };

    return (
        <button style={isActive ? activeStyle : defaultStyles}
                className={`button-alura ${isActive ? "active" : "inactive"} flex justify-center items-center gap-2 text-gray-300 border-gray-300 hover:border-white hover:text-white px-3 md:px-6 py-1 rounded-lg font-semibold text-sm font-Onest`}
                onClick={onClick}
        >
            {svg}
            {<span className={`button-text ${isActive ? "active" : "inactive"}`}>{text}</span>}
        </button>
    );
}

export default Button;
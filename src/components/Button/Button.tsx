import ButtonProps from "../../models/ButtonProps";

function Button({ svg, text, isActive, onClick, type }: ButtonProps) {

    const activeStyle = {
        backgroundColor: "#297ae5",
        color: "#eff8ff"
    };

    const defaultStyles = {
        backgroundColor: "transparent",
        color: "inherit"
    };

    return (
        <button style={isActive ? activeStyle : defaultStyles}
                className={`button-alura ${isActive ? "active" : "inactive"} flex justify-center items-center gap-2 text-gray-300 border-none md:border-2 md:border-gray-300 md:hover:border-white lg:border-2 lg:border-gray-300 lg:hover:border-white hover:text-white px-3 md:px-6 py-1 rounded-full font-semibold text-sm font-Onest`}
                onClick={onClick}
                type={type}
        >
            {svg}
            {<span className={`button-text ${isActive ? "active" : "inactive"}`}>{text}</span>}
        </button>
    );
}

export default Button;
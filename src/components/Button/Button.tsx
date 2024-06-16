interface ButtonProps {
    text: string;
    bg?: string;
    textColor?: string;
}

function Button(props: ButtonProps) {
    return (
        <button style={{ backgroundColor: props.bg,
                        color: props.textColor }}
            className="px-4 py-2 border-2 rounded-md">
            {props.text}
        </button>
    );
}

export default Button;
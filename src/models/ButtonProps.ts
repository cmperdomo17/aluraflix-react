interface ButtonProps {
    svg: JSX.Element;
    text: string;
    isActive: boolean;
    onClick?: () => void;
    type?: "button" | "submit";
}

export default ButtonProps;
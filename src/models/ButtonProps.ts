interface ButtonProps {
    svg: JSX.Element;
    text: string;
    isActive: boolean;
    onClick?: () => void;
}

export default ButtonProps;
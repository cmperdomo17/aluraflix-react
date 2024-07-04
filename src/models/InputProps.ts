interface InputProps {
    title: string;
    textValue?: string;
    setTextValue?: (text: string) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default InputProps;
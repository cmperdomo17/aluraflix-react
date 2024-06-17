interface InputProps {
    title: string;
    textValue?: string;
}

function Input({title, textValue}: InputProps) {
    return (
        <>
            <h1 className="font-bold">{title}</h1>
            <input type="text" className="bg-white rounded-full px-2 text-dark font-semibold" value={textValue} />
        </>
    );
}

export default Input;
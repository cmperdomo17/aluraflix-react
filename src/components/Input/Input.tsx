import InputProps from "../../models/InputProps";

function Input({title, textValue}: InputProps) {
    return (
        <>
            <h1 className="font-bold">{title}</h1>
            <input type="text" className="bg-white rounded-full px-2 text-dark font-semibold" value={textValue} required/>
        </>
    );
}

export default Input;
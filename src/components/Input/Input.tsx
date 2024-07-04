import InputProps from "../../models/InputProps";
import { useState } from "react";

function Input({title, textValue}: InputProps) {
    const [value, setValue] = useState(textValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <>
            <h1 className="font-bold py-3">{title}</h1>
            <input type="text" className="bg-white rounded-full px-2 text-dark font-semibold w-80 lg:w-96"
                value={value}
                required
                onChange={handleChange}
            />
        </>
    );
}

export default Input;
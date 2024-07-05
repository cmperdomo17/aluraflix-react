import { forwardRef, useEffect } from 'react';
import InputProps from '../../models/InputProps';

const Input = forwardRef<HTMLInputElement, InputProps>(({ title, textValue, placeholder, ...props }, ref) => {
    useEffect(() => {
        if (ref && 'current' in ref && ref.current) {
            ref.current.value = textValue || '';
        }
    }, [textValue, ref]);

    return (
        <>
            <h1 className="font-bold py-3">{title}</h1>
            <input
                type="text"
                className="bg-white rounded-full px-2 text-dark font-semibold w-80 lg:w-96"
                ref={ref}
                placeholder={placeholder}
                defaultValue={textValue}
                required
                {...props}
            />
        </>
    );
});

Input.displayName = 'Input';

export default Input;
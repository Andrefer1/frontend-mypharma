import { useEffect, useRef, useState, useCallback } from "react";
import { useField } from "@unform/core";

import { Container, InputStyles } from "./styles";
import { IconType } from "react-icons/lib";

interface InputProps {
    name: string;
    icon: IconType;
    placeholder: string;
    type?: string
    span?: string
    spanPassword?: string;
}

const Input = ({ name, icon: Icon, span, spanPassword, ...rest }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const { fieldName, defaultValue, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <InputStyles isFilled={isFilled} isFocused={isFocused}>
                {Icon && <Icon size={20} />}

                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    defaultValue={defaultValue}
                    ref={inputRef}
                    required
                    {...rest}
                />

            </InputStyles>

            <span>{!spanPassword ? span : spanPassword}</span>
        </Container>
    );
};

export default Input;
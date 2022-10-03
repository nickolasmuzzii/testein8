import React from 'react';
import { Field } from 'formik'
import { type } from 'os';

type InputProps = {
    className?: string;
    name?: string;
    value?: any
    type?: string
    placeholder?: string
}

const Input = ({
    className,
    name,
    value,
    type,
    placeholder,

}:InputProps) => {
    return (
        <Field
         className={className}
         type={type}
         name={name}
         value={value}
         placeholder={placeholder}
        />
    )
}

export default Input
import React from 'react';

export interface InputProps {
    inputRef: React.RefObject<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <input ref={ref} />
    )
});

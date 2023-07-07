import React, {ChangeEvent, useState} from 'react';

export const Input = () => {

    const [newTitle, setNewTitle] = useState ('')

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        <input type='text' value={newTitle} onChange={changeInputHandler} />
    );
};


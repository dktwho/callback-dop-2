import React, {ChangeEvent} from 'react';

type PropsType = {
    newTitle: string
    setNewTitle: (value: string) => void
}
export const Input = ({newTitle, setNewTitle}: PropsType) => {

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        <input type='text' value={newTitle} onChange={changeInputHandler}/>
    );
};


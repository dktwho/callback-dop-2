import React, {RefObject} from 'react';

type PropsType = {
    // newTitle: string
    newTitle: RefObject<HTMLInputElement>
    // setNewTitle: (value: string) => void
}
export const Input = ({newTitle}: PropsType) => {
    // const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewTitle(e.currentTarget.value)
    // }
    return (
        // <input type='text' value={newTitle} onChange={changeInputHandler}/>
        <input type='text' ref={newTitle}/>
    );
};

//     ------------------- old example with control input with  use state
// import React, {ChangeEvent} from 'react';
//
// type PropsType = {
//     newTitle: string
//     setNewTitle: (value: string) => void
// }
// export const Input = ({newTitle, setNewTitle}: PropsType) => {
//     const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setNewTitle(e.currentTarget.value)
//     }
//     return (
//         <input type='text' value={newTitle} onChange={changeInputHandler}/>
//     );
// };


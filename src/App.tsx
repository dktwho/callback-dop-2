import React, {useEffect, useState} from 'react';
import './App.css';
import {Input} from "./Input";
import {Button} from "./Button";


type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    let [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState ('')
    const API_URL_TODOS = 'https://jsonplaceholder.typicode.com/todos'

    const getDataFromServer = () => {
        fetch(API_URL_TODOS)
            .then(res => res.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    const getData = () => {
        getDataFromServer()
    }

    const removeData = () => {
        setTodos([])
    }

    const addTodoHandler = () => {
        let newTodos = {userId: todos.length + 1,id: todos.length + 1,title: newTitle,completed: false}
        setTodos([newTodos,...todos])
        setNewTitle('')
    }


    let result = todos.map(todo => {
        return (
            <li key={todo.id}>
                <span>{todo.title}</span>
                <input type="checkbox" checked={todo.completed} readOnly/>
            </li>
        )
    })

    return (
        <div className="App">
            <div>
                <Input newTitle={newTitle} setNewTitle={setNewTitle}/>
                <Button name={'Add'} callback={() => addTodoHandler()} />
            </div>

            <Button name={'Show Todos'} callback={getData} />
            <Button name={'Remove Todos'} callback={removeData} />
            <ol>{result}</ol>
        </div>
    );
}

export default App;

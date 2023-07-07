import React, {useEffect, useState} from 'react';
import './App.css';


type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    let [todos, setTodos] = useState<TodosType[]>([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => setTodos(json))
    }

    const removeData = () => {
    setTodos([])
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then(json => setTodos(json))
    // }, [])


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
            <button onClick={getData}>get data</button>
            <button onClick={removeData}>remove data</button>
            <ol>{result}</ol>

        </div>
    );
}

export default App;

import { useRef, useState } from "react";

const Todo = () => {
    // const [text, setText] = useState('');
    const textRef = useRef('');
const [todos, setTodos] = useState(['washing']);

const handleAdd = () => {
    // const normalizedText = text.toLowerCase();    
    // if(!todos.some((todo) => todo.toLowerCase() === normalizedText) && text.length > 0){
    //     setTodos([...todos, text]);
    // }
    // setText('')
    const newText = textRef.current.value;
    if(!todos.includes(newText) && newText.length > 0){
        setTodos([...todos, newText]);
    }
    textRef.current.value = '';
}

const handleDelete = (i: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete '${i}'?`);
    if(confirmed) setTodos(todos.filter((j) => j != i));
}   

const handleDeleteAll = () => {
    setTodos([]);
}

    return (
    <div>
        <h1>Todo</h1>
        <div>
            {/* <input value={text} type="text" onChange={(e: any) => setText(e.target.value)} onKeyUp={(e) => {
                if(e.key === 'Enter') {
                    handleAdd();
                }
            }}/> */}
            <input ref={textRef} type="text"  />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {todos.map((i) => (
                    <li key={i}>{i} <button onClick={() => handleDelete(i)}>delete</button></li>
                ))}
            </ul>
            <button onClick={handleDeleteAll}>Clear All</button>
        </div> 
    </div>
  )
}

export default Todo
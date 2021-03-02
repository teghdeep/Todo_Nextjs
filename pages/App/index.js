import {useState} from 'react'

const App = () => {
    const [userInput,setUserInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const onDelete = (m) => {
        const uparr = todoList.filter((t)=> todoList.indexOf(t) != todoList.indexOf(m))
        setTodoList(uparr);
    }
    return(
    <>
    <h3>Todo List</h3>
    <input value={userInput} placeholder="Enter the Todo Item" onChange={(e)=>setUserInput(e.target.value)} />
    <button onClick={()=>{setTodoList([userInput, ...todoList]),setUserInput("")}}>Add</button>
    <ul>
    {todoList.length >= 1 ?todoList.map((m,i)=>{
        return(<li key={i}>{m}<button onClick={()=>onDelete(m)}>Delete</button></li>)
    }):"Please Enter your Todo List"}
    </ul>
    </>
    )
}

export default App;
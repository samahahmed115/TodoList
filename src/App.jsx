import { React,useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';





function App(){
    let [todos ,setTodos]= useState([]);
    const[todoToshow,setTodoToshow] = useState("all");
    const addTodo  =(todo)=>{
        setTodos([todo, ...todos ]); //extrect to arry todoss
    };

    const handleDelete =(id)=>{
        setTodos(todos. filter((todo)=> todo.id !== id))
    }

    return(
        <div>
            <TodoForm onSubmit={addTodo}/>
                        {
                todos.map((todo)=>(
                    <Todo key={todo.id} todo={todo}  onDelete={() => handleDelete(todo.id)} />
                ))
            }
            <div>
                <button>All</button>
                <button>Active</button>
                <button>complate</button>
            </div>

        </div>

    )
}

export default App;





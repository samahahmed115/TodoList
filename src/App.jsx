import { React,useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';






function App(){
    let [todos ,setTodos]= useState([]);
    const[todoToshow,setTodoToshow] = useState("all");
    const[toggleAllComplete, setToggleAllComplete] = useState(true);
    const addTodo  =(todo)=>{
        setTodos([todo, ...todos ]); //extrect to arry todoss
    };

    const handleDelete =(id)=>{
        setTodos(todos. filter((todo)=> todo.id !== id))
    };
    
    const updateTodoToShow = (s) => {
        setTodoToshow(s);
    };
    const toggleComplete = (id)=>{ setTodos(
        todos.map((todo)=>
        {
            if(todo.id === id){
                return{
                    ...todo,
                    complete : !todo.complete
                }

            } else{
                return todo;
            }
        }
        )
    )

    };

    if(todoToshow === "active"){
        todos = todos.filter((todo)=> !todo.complete);
    }  else if (todoToshow === "complete"){
        todos = todos.filter((todo)=> !todo.complete);
    }

    return(
        <div>
            <TodoForm onSubmit={addTodo}/>
                        {
                todos.map((todo)=>(
                    <Todo key={todo.id} todo={todo}  onDelete={() => handleDelete(todo.id)}
                    toggleComplete ={()=> toggleComplete(todo.id)} />
                ))
            }
            <div>
                <button onClick={()=> updateTodoToShow("all")}>All</button>
                <button onClick={()=> updateTodoToShow("active")}>Active</button>
                <button onClick={()=> updateTodoToShow("complete")}>complete</button>
            </div>

        </div>

    )
}

export default App;





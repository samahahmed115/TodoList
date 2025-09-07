import {React , useState} from "react";

const TodoForm = () => {
    const {text, setText} = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input className="input-field"  type="text" 
            onChange={(e) => setText(e.target.value)} value={text}/>
            <button className="btn" onClick={handleSubmit}>Add Todo</button>
        </form>
    );
};

export default TodoForm
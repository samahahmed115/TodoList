import {React , useState} from "react";
import "./TodoForm.css"
import shortid from "shortid";

const TodoForm = (props) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({ // add object
            id : shortid.generate(),
            text: text,
            complete: false, // show complete task

        });
        setText(""); // delete after add
    };

    return(
        <form  className="container" onSubmit={handleSubmit}>
            <input className="input-field"  type="text" 
            onChange={(e) => setText(e.target.value)} value={text}/>
            <button className="btn" onClick={handleSubmit} >Add Todo</button>
        </form>
    );
};

export default TodoForm
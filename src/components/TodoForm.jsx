import {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
         inputRef.current.focus(); 
    });


    const handleChange = e => {
        setInput(e.target.value); // adding value to the input
    };

    const handleSubmit = e => {
        e.preventDefault(); // it prevents the browser defualt effect

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 

            text: input
        });

        setInput('') // after submit and clean the input
        
    };
  return (


    <form className='todo-form' onSubmit={handleSubmit}> 

        {props.edit ? (
            <>
             <input 
             type="text" 
             placeholder='Update your Todo' 
             value={input} 
             name='text' 
             className='todo-input edit' 
             onChange={handleChange}
             ref={inputRef}
             />
     
             <button className='todo-button edit'>Update</button>
            </>
            
        ) : (
            <>
             <input 
            type="text" 
            placeholder='Add a Todo' 
            value={input} 
            name='text' 
            className='todo-input' 
            onChange={handleChange}
            ref={inputRef}
            />
    
            <button className='todo-button'>Add Todo</button>
            </>
           
        )}
       

    </form>

  )
}

export default TodoForm

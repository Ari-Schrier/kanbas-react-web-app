import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API_BASE = process.env.REACT_APP_API_BASE;
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
      const [todos, setTodos] = useState<any[]>([]);
      
      const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };
    
      const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
      };
      const removeTodo = async (target:string) => {
        const response = await axios.get(API +"/" + target + "/delete");
        setTodos(response.data);
      };
      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };
      const fetchTodoById = async (id:string) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
      const updateTitle = async() => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
      const deleteTodo = async (todo:any) => {
        try {
          const response = await axios.delete(`${API}/${todo.id}`);
          setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error:any) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }    
      };
      const updateTodo = async () => {
        try{
          const response = await axios.put(`${API}/${todo.id}`, todo);
          setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error:any) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
    
      };
    
    
    
  useEffect(() => {
    fetchTodos();
  }, []);

    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <h3>Updating an Item in an Array</h3>
        <a className="btn btn-danger" href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>
        <div>
        <input type="text" value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
        <a className="btn btn-danger" href={`${API}/${todo.id}/description/${todo.description}`} >
            Update Description to {todo.description}
        </a>
        </div>

        <div>
        <input type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked?true:false})}/>
        <a className="btn btn-danger" href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Update Completion to {todo.completed+""}
        </a>
        </div>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id} type="number" className="input"
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
         <a href={`${API}/${todo.id}`} className="btn btn-success">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`} className="btn btn-danger">
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`} className="btn btn-primary">
                 Create Todo
            </a>

        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`} className="btn btn-success">
            Delete Todo with ID = {todo.id}
        </a>
        <br />
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
        <div>
          <input type="text" value={todo.id}/>
          <input type="text" value={todo.title}
              onChange={(e) => setTodo({
              ...todo, title: e.target.value })}/>
          <textarea value={todo.description}
            onChange={(e) => setTodo({ ...todo,
              description: e.target.value })} />
          <input value={todo.due} type="date"
            onChange={(e) => setTodo({
              ...todo, due: e.target.value })} />
          <label>
            <input checked={todo.completed} type="checkbox"
              onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            Completed
          </label>
          <button onClick={postTodo}> Post Todo </button>
          <button onClick={createTodo} className="btn btn-primary">
            Create Todo
          </button>
          <button onClick={updateTodo}>
            Update Todo
          </button>
        </div>
        <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>

            <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning float-end">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>
          </li>
        ))}
      </ul>

      </div>
    );
  }
  export default WorkingWithArrays;
import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useCustomNavigation } from '../../../hooks/useCustomNavigation'
import db from "../../../base/data.json"
import { useNavigate } from 'react-router-dom';

interface Todo { id: number; name: string; is_done: boolean }

const Home = () => {
  const { handleNavigation } = useCustomNavigation()
  const [data, setData ] = useState<Array<Todo> | null>(null)
  const [newTodo, setNewTodo] = useState<string>("")
  const [ isLoading, setIsLoading ] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/todos")
    .then((res) => (res.json()))
    .then((rsl) => setData(rsl))
    .catch((err) => {
      setData(db.todos)
      console.error("No conection to server")
    })
  }, [status])
  
  const addNewTodo = (e: any) => {
    setStatus("")
    e.preventDefault()
    if(newTodo.length > 0){
      setIsLoading(true)
      axios.post(`${db.todos}`,{
        name: newTodo,
        is_done: false
      })
      .then(() => {
        setIsLoading(false);
        setNewTodo("")
        setStatus("success")
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
      })
    }
  }

  const updateTodo = (todo: Todo) => {
    setIsLoading(true)
    setStatus("")
    axios.put(`http://localhost:8000/todos/${todo.id}`, {
      ...todo,
      is_done: !todo.is_done
    }).then(() => {
      setStatus("success")
      setIsLoading(false)
    }).catch((err) => console.error(err))
  }

  const DeleteTodo = (id: number) => {
    setIsLoading(true)
    setStatus("")
    axios.delete(`http://localhost:8000/todos/${id}`).then(() => {
      setStatus("success")
      setIsLoading(false)
    }).catch((err) => console.error(err))
  }

  return (
    <div>
      <h1>Home</h1>
      {
        data && data.map((todo: Todo) => (
          <div 
            key={todo.id}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "baseline",
              gap: "5px"
            }}
          >
            <h4>{todo.name}</h4>
            <button 
              style={todo.is_done ? { 
              backgroundColor: "crimson", 
              padding:"5px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              color: "white"
              }:{
                backgroundColor: "green", 
                padding:"5px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
                color: "white"
              }}
              onClick={() => updateTodo(todo)}
            >
              { todo.is_done ? "Finished" : "To do"}
            </button>
            <button 
              style={{ 
              backgroundColor: "#320095336", 
              padding:"3px",
              borderRadius: "5px",
              border: "2px solid purple",
              outline: "none",
              color: "purple"
              }}
              onClick={() => DeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))
      }
      {/* <button onClick={() => handleNavigation("/about")}>GO ABOUT</button> */}
      <form onSubmit={addNewTodo}>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "baseline",
            gap: "5px"
          }}
        >
          <span>Name:</span>
          <input 
            value={newTodo}
            placeholder='name of the activity'
            style={{
              outline: "none",
              padding: "5px"
            }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          style={{ 
            backgroundColor: "crimson", 
            padding:"5px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            color: "white"
          }}
        >
          ADD
        </button>
      </form>
      {
        isLoading && <div>Creating...</div>
      }
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  )
}

export default Home
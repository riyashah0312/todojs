import React,{useState} from 'react'

export default function Todo() {
const[text,setText]=useState("")
const[state,setState]=useState([])  

function addText(e){
  setText(e.target.value);
}

function deletBtn(id){
  const del = state.filter((el,i)=> i!==id);
  setState(del)
}

function editBtn(id){
  const updated = state.map((el,i)=>{
    if(i===id){
      return prompt("Enter the name", el)
    }
    return el;
  })
  setState(updated)
}

function handleSubmit(e){
  e.preventDefault();
  if(text.trim()==="") return;
  setState([...state,text]);
  setText("");
}

return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder='Enter the name' 
          value={text} 
          onChange={addText}
          style={styles.input}
        />
        <input 
          type="submit" 
          value="Submit" 
          style={styles.submitBtn}
        />
      </form>

      <div style={styles.todoList}>
        {state.map((el,i)=>(
          <div key={i} style={styles.todoItem}>
            <h3 style={styles.todoText}>{el}</h3>

            <div>
              <button onClick={()=>deletBtn(i)} style={styles.deleteBtn}>Delete</button>
              <button onClick={()=>editBtn(i)} style={styles.editBtn}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles ={
  container:{
    background:"lightpink",
    maxWidth:"480px",
    margin:"30px auto",
    padding:"20px",
    borderRadius:"10px",
    boxShadow:"0 3px 10px rgba(0,0,0,0.2)"
  },
  title:{
    textAlign:"center",
    marginBottom:"15px",
    fontSize:"28px",
    color:"#222"
  },
  form:{
    display:"flex",
    gap:"10px",
    marginBottom:"20px",
    justifyContent:"center"
  },
  input:{
    flex:"1",
    padding:"8px 10px",
    border:"1px solid #ccc",
    borderRadius:"6px",
    outline:"none",
    fontSize:"16px"
  },
  submitBtn:{
    padding:"8px 18px",
    background:"#007bff",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontSize:"16px",
    transition:"0.3s"
  },
  todoList:{
    marginTop:"10px",
  },
  todoItem:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:"#fff",
    padding:"10px 12px",
    marginBottom:"10px",
    borderRadius:"8px",
    boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
  },
  todoText:{
    margin:0,
    fontSize:"18px"
  },
  deleteBtn:{
    background:"red",
    color:"white",
    border:"none",
    padding:"5px 10px",
    borderRadius:"6px",
    cursor:"pointer",
    marginRight:"6px"
  },
  editBtn:{
    background:"green",
    color:"white",
    border:"none",
    padding:"5px 10px",
    borderRadius:"6px",
    cursor:"pointer"
  }
}

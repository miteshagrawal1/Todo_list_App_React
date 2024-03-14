import { useState } from 'react'

function App() {

  const [tasks, settasks] = useState([])
  const [newtask, setnewtask] = useState("")
  const [color, setcolor] = useState({ bg: "white", text: "black", mode: "Dark Mode" })

  const addtask = () => {
    if (newtask != "") {
      settasks(t => [...t, newtask])
    }
    else {
      alert("add a task")
    }
    setnewtask("")
  }
  function handleinputchange(e) {
    setnewtask(e.target.value)
  }
  function handleromovetask(index) {
    settasks(t => t.filter((_, i) => i !== index))
  }
  // const toggledarkmode = () => {
  //   if (color.bg == "black") {
  //     setcolor({ bg: "white", text: "black", mode: "Dark Mode" })
  //   }
  //   else {
  //     setcolor({ bg: "black", text: "white", mode: "Light Mode" })
  //   }
  // }

  return (
    <div className='container'>
      {/* style={{ backgroundColor: color.bg, color: color.text }}  for dark and light mode*/}
      <div className="box">
        <div className='headingdiv'>
          <h1>Todo list app</h1> 
          {/* <button onClick={toggledarkmode}>{color.mode}</button> */}
        </div>

        <div className="inputfromuser">
          <input type="text" value={newtask} placeholder='enter task....' onChange={handleinputchange} />
          <button onClick={addtask}>Add Task</button>
        </div>

        <div className="tasklist">
        <ol>
          {tasks.map((task, index) =>
            <li key={index}>
              <p>{task}</p>
              <button onClick={() => handleromovetask(index)}>Mark Done</button>
            </li>
          )}
        </ol>
        </div>
        
      </div>
    </div>
  )
}

export default App

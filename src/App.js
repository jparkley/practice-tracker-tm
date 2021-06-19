import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "June 25th",
      reminder: true
    },
    {
      id: 2,
      text: "Basketball Parent Meeting",
      day: "July 6th",
      reminder: false
    },
    {
      id: 3,
      text: "Nobel Orientation",
      day: "August 2th",
      reminder: true
    }
  ])

  const deleteTask = id => {
    console.log("delete in app", id)
    setTasks(tasks.filter(task => task.id != id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No task to show"}
    </div>
  )
}

export default App

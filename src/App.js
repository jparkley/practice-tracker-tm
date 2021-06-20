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

  const toggleReminder = id => {
    console.log("toglle in app", id)
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No task to show"}
    </div>
  )
}

export default App

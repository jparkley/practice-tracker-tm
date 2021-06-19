import { useState } from "react"

const Tasks = () => {
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

  return (
    <div>
      {tasks.map(task => (
        <h4 key={task.id}>{task.text}</h4>
      ))}
    </div>
  )
}

export default Tasks

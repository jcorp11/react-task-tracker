import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'

import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at at 2:30pm',
        reminder: false,
    }
  ])
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task)=> {
      return task.id === id ? {...task, reminder: !task.reminder } : task
    }))
  }
  

  return (
    <div className="container"> 
      <Header />
      <AddTask />
      {
      tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Tasks to show'

      }
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }




export default App;

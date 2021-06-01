import './App.css';
import { useState } from 'react';

// Components
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';


const App = () => {

  const handleSetTasks = (tasks) => {
    setTasks(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const init = () => {
    const tasks = localStorage.getItem('tasks');

    if (tasks === null) {
      return [];
    } else {
      return JSON.parse(tasks);
    }
  }

  const [tasks, setTasks] = useState(init());
  const [showTasksCompleted, setShowTasksCompleted] = useState(true);

  return (
    <div className='container'>
      <Header setShowTasksCompleted={setShowTasksCompleted} showTasksCompleted={showTasksCompleted} />
      <Form tasks={tasks} handleSetTasks={handleSetTasks} />
      <List tasks={tasks} handleSetTasks={handleSetTasks} showTasksCompleted={showTasksCompleted} />
    </div>
  );
}

export default App;

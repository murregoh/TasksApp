import './App.css';
import { useEffect, useState } from 'react';

// Components
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';


const App = () => {

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

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <Header setShowTasksCompleted={setShowTasksCompleted} showTasksCompleted={showTasksCompleted} />
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} showTasksCompleted={showTasksCompleted} />
    </div>
  );
}

export default App;

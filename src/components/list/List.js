import Task from './../task/Task';

const List = (props) => {

    const deleteTask = (taskId) => {
        const newTasks = JSON.parse(JSON.stringify(props.tasks));
        props.handleSetTasks(newTasks.filter(t => t.id !== taskId));
    }

    const updateTaskDescription = (e, taskId, taskDescription) => {
        e.preventDefault();

        let newTasks = JSON.parse(JSON.stringify(props.tasks));
        newTasks.find(t => t.id === taskId).description = taskDescription;
        props.handleSetTasks(newTasks);
    }

    const updateTaskIsCompleted = (taskId, isCompleted) => {

        let newTasks = JSON.parse(JSON.stringify(props.tasks));
        newTasks.find(t => t.id === taskId).isCompleted = isCompleted;
        props.handleSetTasks(newTasks);
    }

    return (
        <ul className='task-list'>
            {
                props.tasks.length ?
                    props.tasks.map(task => {
                        if (!props.showTasksCompleted) {
                            return (
                                !task.isCompleted ?
                                    <Task
                                        key={task.id}
                                        task={task}
                                        deleteTask={deleteTask}
                                        updateTaskDescription={updateTaskDescription}
                                        updateTaskIsCompleted={updateTaskIsCompleted}
                                    />
                                    :
                                    ''
                            )
                        } else {
                            return <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                updateTaskDescription={updateTaskDescription}
                                updateTaskIsCompleted={updateTaskIsCompleted}
                            />
                        }
                    })
                    :
                    <div className='task-list__menssage'>There are no tasks</div>
            }
        </ul>
    );
}

export default List;
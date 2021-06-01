import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(props.task.isCompleted);
    const [taskDescription, setTaskDescription] = useState(props.task.description);

    const updateTaskDescription = (e) => {
        props.updateTaskDescription(e, props.task.id, taskDescription);
        setIsEditing(!isEditing);
    }

    const updateTaskIsCompleted = (e) => {
        props.updateTaskIsCompleted(props.task.id, !isCompleted);
        setIsCompleted(!isCompleted);
    }

    return (

        <li className='task-list__task'>

            <FontAwesomeIcon
                icon={isCompleted ? faCheckSquare : faSquare}
                className='task-list__icon task-list__icon-check'
                onClick={updateTaskIsCompleted}
            />

            <div className='task-list__text'>
                {
                    isEditing ?
                        <form action="" className='form-edit-task' onSubmit={updateTaskDescription}>
                            <input
                                type="text"
                                className='form-edit-task__input'
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                            <button
                                type='submit'
                                className='form-edit-task__btn'
                            >Update</button>
                        </form>
                        :
                        props.task.description
                }
            </div>

            <div className='task-list__container-bottons'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='task-list__icon task-list__action-icon'
                    onClick={() => setIsEditing(!isEditing)}
                />

                <FontAwesomeIcon
                    icon={faTimes}
                    className='task-list__icon task-list__action-icon'
                    onClick={() => props.deleteTask(props.task.id)}
                />
            </div>

        </li>
    );
}

export default Task;
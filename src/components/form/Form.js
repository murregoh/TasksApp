import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [task, setTask] = useState('');

    const addTask = (ev) => {

        ev.preventDefault();

        if (task && task !== '') {
            props.setTasks(
                [
                    ...props.tasks,
                    {
                        id: uuidv4(),
                        description: task,
                        isCompleted: false
                    }
                ]
            );
        };

        setTask('');
    }

    return (
        <form action="" onSubmit={addTask} className='form'>
            <input
                type="text"
                className='form__input'
                placeholder='Type a task'
                value={task}
                onChange={(ev) => setTask(ev.target.value)}
            />
            <button
                type='submit'
                className='form__button'
            >
                <FontAwesomeIcon icon={faPlusSquare} className='form__icon-btn' />
            </button>
        </form>
    );
}

export default Form;
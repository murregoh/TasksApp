import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    return (
        <header className='header'>
            <h1 className='header__title'>Task List</h1>
            <button className='header__button' >
                Completed task
                 <FontAwesomeIcon
                    icon={props.showTasksCompleted ? faEye : faEyeSlash}
                    className='header__icon-button'
                    onClick={() => props.setShowTasksCompleted(!props.showTasksCompleted)}
                />
            </button>
        </header>
    );
}

export default Header;
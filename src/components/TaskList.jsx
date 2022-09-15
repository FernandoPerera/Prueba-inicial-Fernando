import PropTypes from 'prop-types'
import Task from './Task';

const TaskList = ( { list, handleDelete  } ) => {
  return (
    <div>
        <h4>Tasklist</h4>
        <div className='list'>
            {
                list.map(task => {
                    return (
                        <Task
                            key={task.key}
                            id={task.id}
                            name={task.name}
                            handleDelete={handleDelete} />
                    )
                })
            }
        </div>
    </div>
  )
}

TaskList.propTypes = {
  datos: PropTypes.object,
  setDatos: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  setList: PropTypes.func.isRequired,
  handleDelete: PropTypes.func
};

export default TaskList
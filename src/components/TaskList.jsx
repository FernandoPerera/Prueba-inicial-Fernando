import PropTypes from 'prop-types'
import Task from './Task';

const TaskList = ( { list, handleDelete  } ) => {
  return (
    <div>
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

            <button className='delete' onClick={() => handleDelete(id)}>Borrar</button>
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
import PropTypes from 'prop-types';

const Task = ({ id, name, handleDelete }) => {
  return (
    <div>
        <div>
            <button type='submit'>seleccionar</button>
            <h3>{name}</h3>
        </div>

        <button className='delete' onClick={() => handleDelete(id)}>Borrar</button>
    </div>
  )
}

Task.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    handleDelete: PropTypes.func
  };

export default Task
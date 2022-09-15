import PropTypes from 'prop-types';

const Task = ({ name}) => {
  return (
    <div>
        <div>
            <button type='submit'>seleccionar</button>
            <h3>{name}</h3>
        </div>
    </div>
  )
}

Task.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    handleDelete: PropTypes.func
  };

export default Task
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Card = ( { datos, setDatos, list, setList }) => {

    const initUser = {
        tarea: datos.tarea
    }

    const [form, setFormState] = useState(initUser)

    const handleInputChange = (e) => {
        setFormState({
        ...form,
        [e.target.name]:
        e.target.type === 'checkbox'
        ? e.target.checked: e.target.value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDatos(form)
        setList([
          { id: uuidv4(), name: datos.tarea},...list ]
          )
        setFormState({tarea: ''})
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task" className=''></label>
                <input
                type="text" 
                className="" 
                id="taask"  
                name="tarea" 
                value={form.tarea} 
                onChange={handleInputChange}        
         />

         <button type='submit' className='add'>Add</button>
            </div>
        </form>
        <div>
            <TaskList />
        </div>
    </div>
  )
}

Card.propTypes = {
    datos: PropTypes.object,
    setDatos: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired,
	  setList: PropTypes.func.isRequired
  };

export default Card
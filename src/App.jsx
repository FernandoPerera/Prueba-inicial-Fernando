import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import TaskList from './components/TaskList'

const App = () => {

    const listTask = []

    const getList = () => {
        const storage = JSON.parse(localStorage.getItem('list'));
        return storage || []
    }

    const [list, setList] = useState(getList())

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
      }, [list])

      const handleDelete = (id) => {
        setList( list.filter((task) => task.id !== id))
      }

    const [datos, setDatos] = useState({
        tarea: '',
        show: true
    })

    return (
        <div className='container'>
            <h4 className='header'>My TaskList App!!!</h4>
            <div>
                <Card datos={datos} setDatos={setDatos} list={list} setList={setList}/> 

                { datos.show === true ? <TaskList list={list} setList={setList} 
                  handleDelete={handleDelete}/> : null }
            </div>
        </div>
    )
}

export default App
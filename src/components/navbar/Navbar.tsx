import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todoContext'

export const Navbar: React.FC = () => {

    const { addTodo } = useContext(TodoContext)
    const [todoName, setTodoName] = useState<string>('')

    return (
        <div className='uk-container'>
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <a href="#" className='uk-navbar-item uk-logo'>My Todos</a>
                </div>
                <div className="uk-navbar-right">
                    <form className='uk-flex uk-flex-middle' 
                    onSubmit={(e) => addTodo(todoName, e)}>
                        <label htmlFor='name' className='uk-margin-small-right'>
                            <input
                                className='uk-input'
                                type="text" id='name'
                                placeholder='Add new todo'
                                value={todoName}
                                onChange={(e) => { setTodoName(e.target.value) }} />
                        </label>
                        <span style={{
                            cursor: 'pointer'
                        }} uk-icon='icon: plus; ratio: 1.2'
                            onClick={() => addTodo(todoName) }></span>
                    </form>
                </div>
            </nav>
        </div>
    )
}

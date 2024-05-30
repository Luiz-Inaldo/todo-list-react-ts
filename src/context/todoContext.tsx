import React, { createContext, useEffect, useState } from "react"
import { ContextType, TodoProps } from "../types/types"
import { getTodos, saveTodo } from "../services/TodoServices";

export const TodoContext = createContext<ContextType>({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { },
    toggleDone: () => { },
})

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [todos, setTodos] = useState<TodoProps[]>(getTodos);

    useEffect(() => {
        saveTodo(todos);
    }, [todos])

    const addTodo = (title: string, e?: React.FormEvent<HTMLFormElement>): void => {
        e?.preventDefault();
        if (title === '') return;
        setTodos([...todos, {
            id: todos.length + 1, title: title, done: false
        }])
    }

    const deleteTodo = (id: number): void => {
        const newList: TodoProps[] = todos.filter(todo => todo.id != id);
        setTodos(newList)
    }

    const toggleDone = (id: number): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleDone }}>
            {children}
        </TodoContext.Provider>
    )
}
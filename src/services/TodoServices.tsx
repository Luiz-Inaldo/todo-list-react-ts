import { TodoProps } from "../types/types";

const TODO_STORE = 'todos';

export const getTodos = ():TodoProps[] => {
    const data = localStorage.getItem(TODO_STORE) || '';
    try {
        const result: TodoProps[] = JSON.parse(data);
        return result;
    } catch {
        return []
    }
}

export const saveTodo = (todos: TodoProps[]) => {
    localStorage.setItem(TODO_STORE, JSON.stringify(todos))
}
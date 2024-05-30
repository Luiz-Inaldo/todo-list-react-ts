
export interface TodoProps {
    id: number,
    title: string,
    done: boolean
}

export type ContextType = {
    todos: TodoProps[],
    addTodo: (title: string, e?: React.FormEvent<HTMLFormElement>) => void,
    deleteTodo: (id: number) => void,
    toggleDone: (id: number) => void,
    children?: React.ReactNode
}
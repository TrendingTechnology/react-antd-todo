import { todoConstants } from '../constants'

// todo's index
let todoIndex = 0

const addTodoSuccess = todo => ({
    type: todoConstants.ADD_TODO_SUCCESS,
    payload: todo
})

const toggleTodoSuccess = id => ({
    type: todoConstants.TOGGLE_TODO_SUCCESS,
    payload: id
})

const removeTodoSuccess = id => ({
    type: todoConstants.REMOVE_TODO_SUCCESS,
    payload: id
})

const addTodo = name => addTodoSuccess({
    id: todoIndex++,
    name: name,
    completed: false,
})

const toggleTodo = id => toggleTodoSuccess(id)

const removeTodo = id => removeTodoSuccess(id)

export const todoActions = {
    addTodo,
    toggleTodo,
    removeTodo
}
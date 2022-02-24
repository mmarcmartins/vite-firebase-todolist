import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import TodoModel from '../../model/Todo';
import TodoList from './TodoList';
import TodoListModel from '../../model/TodoList';

const todos = [
    new TodoModel('1', 'testing', false),
    new TodoModel('2', 'testing2', false)
]

const todoList = new TodoListModel(todos);

describe('Todo list test', () => {    
    render(<TodoList todos={todoList} removeTodo={jest.fn()} completeTodo={jest.fn()} />)
    expect(screen.findByText('testing'))
})
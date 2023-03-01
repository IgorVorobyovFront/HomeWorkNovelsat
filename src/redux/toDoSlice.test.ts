import { createStore } from '@reduxjs/toolkit';
import { toDoSlice, addToDo, deleteToDo, editToDo } from './toDoSlice';

describe('toDoSlice', () => {
    let store: any;

    beforeEach(() => {
        store = createStore(toDoSlice.reducer);
    });

    test('should add a new todo', () => {
        store.dispatch(addToDo({ title: 'New Todo' }));
        const todos = store.getState();
        expect(todos.length).toBe(1);
        expect(todos[0].title).toBe('New Todo');
    });

    test('should delete a todo', () => {
        store.dispatch(addToDo({ title: 'New Todo' }));
        store.dispatch(deleteToDo({ id: '0' }));
        const todos = store.getState();
        expect(todos.length).toBe(0);
    });

    test('should edit a todo', () => {
        store.dispatch(addToDo({ title: 'New Todo' }));
        store.dispatch(editToDo({ id: '0', title: 'Updated Todo' }));
        const todos = store.getState();
        expect(todos.length).toBe(1);
        expect(todos[0].title).toBe('Updated Todo');
    });
});

import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import toDoReducer, { addToDo, deleteToDo, editToDo } from './toDoSlice';

describe('toDo feature', () => {
    let store: EnhancedStore;

    beforeEach(() => {
        store = configureStore({ reducer: toDoReducer });
    });

    test('should add a new todo item', () => {
        const title = 'Buy milk';
        store.dispatch(addToDo({ title }));
        const state = store.getState();
        expect(state).toContainEqual({ id: expect.any(String), title });
    });

    test('should delete a todo item', () => {
        const toDoItem = { id: '1', title: 'Buy milk' };
        store.dispatch(addToDo({ title: toDoItem.title }));
        store.dispatch(deleteToDo({ id: toDoItem.id }));
        const state = store.getState();
        expect(state).not.toContainEqual(toDoItem);
    });

    test('should edit a todo item', () => {
        const toDoItem = { id: '1', title: 'Buy milk' };
        store.dispatch(addToDo({ title: toDoItem.title }));
        const newTitle = 'Buy bread';
        store.dispatch(editToDo({ id: toDoItem.id, title: newTitle }));
        const state = store.getState();
        expect(state).toEqual([{ id: toDoItem.id, title: newTitle }]);
    });
});

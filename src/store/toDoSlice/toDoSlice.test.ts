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
        const title = 'Buy chocolate';
        store.dispatch(addToDo({ title }));
        const state = store.getState();
        store.dispatch(deleteToDo({ id: state[0].id }));
        expect(store.getState()).toEqual([]);
    });

    test('should edit a todo item', () => {
        const title = 'Buy water';
        store.dispatch(addToDo({ title }));
        const newTitle = 'Buy bread';
        const state = store.getState();
        store.dispatch(editToDo({ id: state[0].id, title: newTitle }));
        expect(store.getState()).toContainEqual({ id: expect.any(String), title: newTitle });
    });
});

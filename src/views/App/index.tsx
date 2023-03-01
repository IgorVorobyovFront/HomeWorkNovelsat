import React from 'react';

import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {addToDo, deleteToDo, editToDo} from "../../redux/toDoSlice";
import {InputPlus} from "../components/InputPlus";
import {InputTask} from "../components/InputTask";

export const App: React.FC = () => {
    const toDoList = useAppSelector((state) => state.toDo);
    const dispatch = useAppDispatch();

    function removeTask(id: string) {
        dispatch(deleteToDo({id}));
    }
    function updateTask(id: string, title: string) {
        dispatch(editToDo({id, title}));
    }

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                        if (title) {
                            dispatch(addToDo({title}))
                        }
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                {!toDoList.length && (
                    <p className={styles.articleText}>There is not task.</p>
                )}
                {toDoList.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </section>
        </article>
    );
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlise';
import { useNavigate } from 'react-router-dom';
import styles from './TaskAdd.module.scss'

const AddTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
      navigate('/')
    }
  };

  return (
    <div className={styles.addTask}>
      <form className={styles.taskForm} onSubmit={handleSubmit}>   
        <h1 className={styles.title}>Add Task</h1> 
        <input className={styles.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        <button className={styles.button} type="submit">Save</button>
      </form>
    </div>

  );
}

export default AddTask;

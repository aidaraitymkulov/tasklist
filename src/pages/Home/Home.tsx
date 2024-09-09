import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { TaskItem } from '../../components/TaskItem';
import { removeTask, toggleTask } from '../../store/taskSlise';
import styles from './Home.module.scss'

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className={styles.listBox}>
      <div className={styles.head}>
      <h1 className={styles.title}>Tasks</h1>
      <div className={styles.counter}><span className={styles.number}>{tasks.length}</span></div>
      </div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => dispatch(removeTask(task.id))}
          onToggle={() => dispatch(toggleTask(task.id))}
        />
      ))}
    </div>
  );
}

export default Home


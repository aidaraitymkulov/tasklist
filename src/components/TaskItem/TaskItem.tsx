import React from 'react';
import styles from './TaskItem.module.scss';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDelete: () => void;
  onToggle: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <input
        className={styles.input}
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <p className={styles.task}>
        {task.title}
      </p>
      <button className={styles.button} onClick={onDelete}>Delete</button>
    </div>
  );
};

import React from 'react';

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
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};


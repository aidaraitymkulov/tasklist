import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { TaskItem } from '../TaskItem';
import { removeTask, toggleTask } from '../../store/taskSlise';

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Task List</h1>
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


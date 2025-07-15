import { create } from 'zustand'

export const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task]
    })),

  completed: (index) =>
    set((state) => {
      const updatedTasks = [...state.tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return { tasks: updatedTasks };
    }),
    deleteTask: (index) =>
    set((state) => ({
        tasks: state.tasks.filter((_, i) => i !== index),
    })),
}));

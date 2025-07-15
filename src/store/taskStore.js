import { create } from 'zustand';
import { supabase } from '../service/supabaseClient';

export const useTaskStore = create((set) => ({
  tasks: [],

  fetchTasks: async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
    } else {
      set({ tasks: data });
    }
  },

  addTask: async (title) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title, is_done: false }])
      .select();

    if (error) {
      console.error('Error adding task:', error);
    } else {
      set((state) => ({
        tasks: [data[0], ...state.tasks],
      }));
    }
  },

  toggleTask: async (taskId, currentValue) => {
    const { data, error } = await supabase
      .from('tasks')
      .update({ is_done: !currentValue })
      .eq('id', taskId)
      .select();

    if (error) {
      console.error('Error toggling task:', error);
    } else {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, is_done: !currentValue } : task
        ),
      }));
    }
  },

  deleteTask: async (taskId) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId);

    if (error) {
      console.error('Error deleting task:', error);
    } else {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    }
  },


  updateTask: async (taskId, newTitle) => {
    const { data, error } = await supabase
      .from('tasks')
      .update({ title: newTitle })
      .eq('id', taskId)
      .select();

    if (error) {
      console.error('Error updating task:', error);
    } else {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, title: newTitle } : task
        ),
      }));
    }
  },
}));

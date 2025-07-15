import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

const Input = () => {
  const [taskText, setTaskText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border w-[100%] pl-5 py-1 outline-none"
          type="text"
          placeholder="Enter a task!"
        />
        <button
          className="border px-5 py-1 transition ease-in
           border-l-0 hover:bg-green-500 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Input;

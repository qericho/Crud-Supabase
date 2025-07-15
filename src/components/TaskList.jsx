import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useTaskStore } from "../store/taskStore";
import EditTask from "./EditTask";

const TaskList = () => {
  const [open, setOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  const tasks = useTaskStore((state) => state.tasks);
  const fetchTasks = useTaskStore((state) => state.fetchTasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  useEffect(() => {
    fetchTasks();
  }, []);

  const openEditModal = (task) => {
    setEditTaskData(task);
    setOpen(true);
  };

  return (
    <>
      <div className="w-full h-[300px] overflow-y-auto border p-2">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center px-5 py-1 justify-between border-b"
            >
              <p
                className={`cursor-pointer py-1 ${
                  task.is_done ? "line-through text-gray-400 opacity-60" : ""
                }`}
              >
                {task.title}
              </p>
              <div className="flex items-center space-x-1">
                <span
                  onClick={() => toggleTask(task.id, task.is_done)}
                  className="text-2xl transition ease-in hover:text-green-500 cursor-pointer"
                >
                  <IoMdCheckmarkCircleOutline />
                </span>
                <span
                  onClick={() => openEditModal(task)}
                  className="text-2xl transition ease-in hover:text-yellow-500 cursor-pointer"
                >
                  <MdEdit />
                </span>
                <span
                  onClick={() => deleteTask(task.id)}
                  className="text-2xl transition ease-in hover:text-red-500 cursor-pointer"
                >
                  <MdDelete />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex items-center justify-center relative transition-all duration-300 ease-in ${
          open
            ? "top-[-420px] opacity-100"
            : "top-[-500px] opacity-0 pointer-events-none"
        }`}
      >
        {editTaskData && (
          <EditTask
            currentTask={editTaskData}
            onClose={() => {
              setOpen(false);
              setEditTaskData(null);
            }}
          />
        )}
      </div>
    </>
  );
};

export default TaskList;

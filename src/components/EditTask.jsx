import { useEffect, useRef, useState } from "react";
import { MdCheck } from "react-icons/md";
import { useTaskStore } from "../store/taskStore";

const EditTask = ({ currentTask, onClose }) => {
  const [newTitle, setNewTitle] = useState(currentTask.title);
  const updateTask = useTaskStore((state) => state.updateTask);
  const wrapperRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleUpdate = async () => {
    if (newTitle.trim() === "") return;
    await updateTask(currentTask.id, newTitle);
    onClose();
  };

  return (
    <div
      ref={wrapperRef}
      className="w-[400px] h-full flex items-center justify-center"
    >
      <input
        className="w-full border border-r-0 outline-none py-1 px-2"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Edit task"
      />
      <a
        onClick={handleUpdate}
        className="border px-2 py-1 cursor-pointer"
        title="Save"
      >
        Confirm
      </a>
    </div>
  );
};

export default EditTask;

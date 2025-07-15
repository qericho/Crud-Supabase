import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTask from "./EditTask";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useTaskStore } from "../store/taskStore";


const TaskList = () => {

const [open,setOpen] = useState(false)
const tasks = useTaskStore((state) => state.tasks);
const completed = useTaskStore((state) => state.completed);
const deleteTask = useTaskStore((state) => state.deleteTask);


const openEditModal = () => {
    setOpen(prev => !prev);
    console.log(open)
}
  return (
    <>
    <div className='w-full h-[300px] overflow-y-auto border p-2'>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}
                className='flex items-center px-5 py-1 justify-between border-b'>
                <p  className={`cursor-pointer py-1 ${task.completed ?
                 'line-through text-gray-400 opacity-60' : '' }`}
                >{task.item}</p>
                <div className="flex items-center space-x-1">
                    <span onClick={()=>completed(index)}
                    className="text-2xl transition ease-in hover:text-green-500 cursor-pointer"
                    ><IoMdCheckmarkCircleOutline/></span>
                    <span onClick={openEditModal}
                    className="text-2xl transition ease-in hover:text-yellow-500 cursor-pointer"
                    ><MdEdit/></span>
                    <span onClick={()=>deleteTask(index)}
                     className="text-2xl transition ease-in hover:text-red-500 cursor-pointer"
                    ><MdDelete/></span>
                </div>
            </li>
            ))}
            
        </ul>
    </div>
        <div className={`flex items-center justify-center relative transition-all duration-300 ease-in ${
            open ? 'top-[-400px] opacity-100' : 'top-[-500px] opacity-0 pointer-events-none' }`}>
                     <EditTask />
        </div>
    </>
  )
}

export default TaskList
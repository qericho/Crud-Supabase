import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTask from "./EditTask";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const TaskList = () => {

const [open,setOpen] = useState(false)

const openEditModal = () => {
    setOpen(prev => !prev);
    console.log(open)
}
  return (
    <>
    <div className='w-full h-[300px] overflow-y-auto border p-2'>
        <ul>
            <li className='flex items-center px-5 py-1 justify-between border-b'>
                <p>Learn Supabase</p>
                <div className="flex items-center space-x-1">
                    <span 
                    className="text-2xl transition ease-in hover:text-green-500 cursor-pointer"
                    ><IoMdCheckmarkCircleOutline/></span>
                    <span onClick={openEditModal}
                    className="text-2xl transition ease-in hover:text-yellow-500 cursor-pointer"
                    ><MdEdit/></span>
                    <span className="text-2xl transition ease-in hover:text-red-500 cursor-pointer"
                    ><MdDelete/></span>
                </div>
            </li>
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
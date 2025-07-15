import { MdCheck } from "react-icons/md";

const EditTask = () => {
  return (
    <div className="w-[400px] h-[100px] flex items-center justify-center">
        <input className="w-full border-b outline-none px-2"
        type="text" placeholder="Edit task" />
        <span className="border-b py-1 px-2 cursor-pointer"><MdCheck/></span>
    </div>
  )
}

export default EditTask
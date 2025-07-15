
const Input = () => {
  return (
    <form>
        <div className="flex">
            <input className="border w-[100%] pl-5 py-1 outline-none"
             type="text" placeholder='Enter a task!' />
            <button className="border px-5 py-1 transition ease-in
             text-[14px] border-l-0 hover:bg-green-500 cursor-pointer">
             Submit</button>
        </div>
    </form>
  )
}

export default Input
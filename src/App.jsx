import Input from "./components/Input"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div className="pt-40 flex justify-center md:px-0 px-2">
    <div className="flex flex-col space-y-3 max-w-[500px] w-[500px] max-h-[400px] relative">
        <Input/>
        <TaskList/>
      </div>
     
    </div>
  )
}

export default App
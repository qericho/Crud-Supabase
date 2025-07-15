import EditTask from "./components/EditTask"
import Input from "./components/input"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div className="pt-50 flex justify-center">
      <div className="flex flex-col space-y-3 w-[500px] h-[400px]">
        <Input/>
        <TaskList/>
      </div>
     
    </div>
  )
}

export default App
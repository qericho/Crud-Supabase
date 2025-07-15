import Input from "./components/Input"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div className="pt-40 flex justify-center">
      <div className="flex flex-col space-y-3 w-[500px] max-h-[400px] relative">
        <Input/>
        <TaskList/>
      </div>
     
    </div>
  )
}

export default App
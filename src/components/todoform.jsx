import {useState} from "react";

function TodoForm ({addTask}) {
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
    }

    const handleKeyPress = () => {

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="..."
            />
            <button>Add</button>
        </form>
    )
}
export default TodoForm;
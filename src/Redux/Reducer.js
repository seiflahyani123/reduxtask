
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./ActionTyps"

const initialState = {
task: [
  { desc: "Complete React project", id: Math.random(), isDone: false },
  { desc: "Read a new book chapter", id: Math.random(), isDone: false },
  { desc: "Take a break and walk outside", id: Math.random(), isDone: false },
  { desc: "Write a blog post", id: Math.random(), isDone: false },
  { desc: "Learn a new programming language", id: Math.random(), isDone: false }
]
}
const reducer = (state = initialState, action) => {
switch (action.type) {
        case ADD_TASK:
            return {
                ...state,task: [...state.task, action.payload]
            }
            case DELETE_TASK:
                return {
                    ...state, task: state.task.filter((el) => el.id !== action.payload)
                }
                case TOGGLE_TASK:
                    return {
                        ...state, task: state.task.map((el) => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)
                    }
    

    default:  return state
       
    
}}
export default reducer
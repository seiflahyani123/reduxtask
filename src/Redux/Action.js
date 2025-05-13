import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./ActionTyps"

export const addtask=(payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}
export const deletetask=(payload)=>{
    return {
        type: DELETE_TASK,
        payload
    }
}
export const toggletask=(payload)=>{
    return {
        type: TOGGLE_TASK,
        payload
    }
}
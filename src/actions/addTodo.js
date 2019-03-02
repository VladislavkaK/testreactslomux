import ADD_TODO from "../constants";

const addTodo = todo => {
    
    return ({
        type: ADD_TODO,
        payload: todo
    })
}

export default addTodo;
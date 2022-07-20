import {db} from "../../db";
import { sendError } from "h3";

export default defineEventHandler((e) => {
    const method = e.req.method;
    const context = e.context;
    console.log(e);

    // extract the path parameter.
    const {id} = context.params;

    const findTodoById = (todoId) => {
        let index;
        const todo = db.todos.find((t, i) => {
            if (t.id === todoId) {
                index = i;
                return true;
            }
            return false;
        })

        // throw error if todo is not found
        if (!todo) {
            const TodoNotFoundError = createError({
                statusCode: 404,
                statusMessage: "TODO not found",
                data: {}
            });
            sendError(e, TodoNotFoundError)
        }

        return {todo, index}
    }

    if (method === 'PUT') {
        
        // search for the item.
        const {todo, index} = findTodoById(id);

        // update the complete process
        const updateTodo={
            ...todo,
            completed: !todo.completed,
        }

        db.todos[index] = updateTodo;

        return updateTodo;

    }

    if (method === 'DELETE') {
        // search for the item.
        const {todo, index} = findTodoById(id);

        db.todos.splice(index, 1);

        return {
            message: "item deleted",
            item: todo,
        }
    }
})
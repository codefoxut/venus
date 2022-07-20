const useTodos = () => {
    const {data: todos, refresh} = useAsyncData('todos', () => {
        return $fetch(`/api/todo`);
    });
    
    const addTodo = async (item) => {
        if (!item) return;
        await $fetch(`/api/todo`, {method: "post", body: {item}});
        refresh();
    };
    
    const updateTodo = async (todoId) => {
        await $fetch(`/api/todo/${todoId}`, {method: "put" });
        refresh();
    };
    
    const deleteTodo = async (todoId) => {
        await $fetch(`/api/todo/${todoId}`, {method: "delete" });
        refresh();
    };

    return {todos, addTodo, updateTodo, deleteTodo};
}



export default useTodos;
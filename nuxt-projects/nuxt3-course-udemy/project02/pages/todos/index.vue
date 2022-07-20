<script setup lang="ts">
const input = ref("");
const {todos, addTodo, updateTodo, deleteTodo} = useTodos();


const handleAdd = () => {
    addTodo(input.value);
    input.value = ""
}
</script>

<template>
    <div class="container">
        <NCard class="cards">
            <h1> My Todos</h1>
            <div class="add-todo">
                <input placeholder="Add a new todo..." v-model="input" />
                <NButton @click="handleAdd">Add</NButton>
            </div>
        </NCard>
        <NCard 
            class="card" 
            v-for="todo in todos" 
            :key="todo.id"  >
                <h4
                  :class="todo.completed ? 'completed' : null"
                  @click="() => updateTodo(todo.id)"
                >
                  {{ todo.item }}
                </h4>
                  <p @click="() => deleteTodo(todo.id)">x</p>
        </NCard>
    </div>
</template>

<style scoped>
.container { 
    padding: 2rem;
    margin: 0 auto;
    max-width: 50%;
}

.cards {
    padding: 2rem;
}

input {
    outline: none;
}
.add-todo {
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-between;
}

.card {
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.completed {
    text-decoration: line-through;
}
</style>
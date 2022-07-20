<script setup lang="ts">
    interface NameProps {
        name: string;
        index: number;
    }

    const props = defineProps<NameProps>();

    const emit = defineEmits(["remove"]);

    const removeName = () => {
        console.log("here", props);
        emit("remove", props.index);
    };

</script>

<template>
    <div  class="card">
        <h4>{{ name }}</h4>
        <p @click="removeName">x</p>
    </div>
</template>


<style scoped>
.card {
    background-color: rgb(27, 60, 138);
    width: 31.9%;
    color: white;
    border-radius: 1rem;
    padding: 0.1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.card p {
    position: absolute;
    top: -28%;
    left: 92.5%;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.178)
}
</style>
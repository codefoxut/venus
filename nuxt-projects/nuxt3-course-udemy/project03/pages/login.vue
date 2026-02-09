<script setup>
definePageMeta({
    layout: "custom"
})

const { login } = useAuth()
const user = useAuth().user

const email = ref('')
const password = ref('')
const errorMessage = ref(null)

const handleLogin = async () => {
    const { error } = login({ email: email.value, password: password.value })
    if (error) {
        errorMessage.value = error
    } else {
        navigateTo('/')
    }
}
</script>

<template>
    <div class="mt-10">
        <h1 class="text-5xl font-bold mb-7">Log in</h1>
        <form @submit.prevent="handleLogin" class="flex flex-col gap-4 max-w-sm">
            <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded" required />
            <input v-model="password" type="password" placeholder="Password" class="p-2 border rounded" required />
            <button type="submit" class="bg-red-400 p-3 rounded text-white font-bold">Login</button>
        </form>
        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    </div>
</template>

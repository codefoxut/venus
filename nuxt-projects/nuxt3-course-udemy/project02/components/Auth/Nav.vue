<script setup lang="ts" >
const {signOut} = useAuth();
</script>

<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/supabase">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/supabase/profile">Profile</NuxtLink>
            </li>
            <li class="logout" @click="signOut">Logout</li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: black;
    height: 15vh;

}

ul {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 5rem;
}

li {
    color: white;
    margin-right: 1rem;
}

.logout {
    margin-left: auto;
    cursor: pointer;

}
</style>
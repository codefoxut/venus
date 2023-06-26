<script setup lang="ts">
 const {user, signUp, signIn, signOut} = useAuth();

 const authState = ref<"login" | "signup">("login");
 const authError = ref("");
 const input = reactive({
    password: "",
    email: "",
 });
 const showConfirmEmailMessage = ref(false);
 const router = useRouter();

 const toggleAuthState = () => {
    if (authState.value === "login") authState.value = "signup";
    else authState.value = "login";
 }

 const handleSubmit = async () => {
    try {
        if (authState.value === "login") {
            await signIn({email: input.email, password: input.password});
            router.push("/supabase/profile");
        } else {
            await signUp({email: input.email, password: input.password});
            // go to email and move to profile from there.
            showConfirmEmailMessage.value = true;
        }
        input.email = "";
        input.password="";
    } catch(err) {
        authError.value = err.message;
    }
    
 }
</script>


<template>
<div>
<NCard class="card">
<div v-if="!showConfirmEmailMessage">
    <h3> {{ authState }} </h3>
    <div class="input-container">
        <input placeholder="Email" v-model="input.email" />
        <input placeholder="Password" v-model="input.password" type="password" />
    </div>
    <NButton @click="handleSubmit">Submit</NButton>
    <NButton @click="signOut">Log Out</NButton>
    <p class="error" v-if="authError"> {{ authError }}</p>
    <p @click="toggleAuthState"> {{ authState === 'login' ? "Don't have an account? Create one now." : "Already have an account. Go ahead and log in."}}</p>

</div>
<div v-else >
Check your email for confirmation. </div>
</NCard>
    
</div>
</template>


<style scoped>
.card {
    padding: 1rem;
    width: 40rem;
}

.card h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.input-container input {
    /* width: 10rem; */
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    outline: none;
    border: 0.1rem solid rgba(0,0,0,0.1);
    border-radius:0.2rem;
}

p {
    color: blue;
    font-size: 0.5rem;
    cursor: pointer;
}

.error {
    color: red;
}
</style>
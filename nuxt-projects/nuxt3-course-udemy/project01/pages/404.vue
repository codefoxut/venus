<template>
    <div>
        <div class="container">
            <NuxtLayout name="error">

            <template #header>
                <h1>Page not Found</h1>
            </template>
            <template #back-button >
            <NuxtLink to="/restaurantly/restaurants">Go Back</NuxtLink>

            </template>
            </NuxtLayout>
        </div>
    </div>
</template>


<style scoped>
    .container {
        text-align: center;
        margin-top: 5rem;
    }
</style>
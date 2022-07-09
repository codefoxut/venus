<template>
    <div>
        <Html :lang="dynamic > 50 ? 'en-GB': 'eb-US'">
            <Head>
                <Title>Restaurantly</Title>
                <Meta name="description" content="this page is cool" />
                <Link rel="preload" href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" as="script" />
            </Head>
        </Html>
        <NuxtLayout name="restaurantly" >
        <div class="container">
            <h1>Welcome to Restaurantly</h1>
            <NuxtLink to="/restaurantly/restaurants">Go to restaurants</NuxtLink>
        </div>
        </NuxtLayout>
    </div>
</template>


<style scoped>
    .container {
        text-align: center;
        margin-top: 5rem;
    }
</style>
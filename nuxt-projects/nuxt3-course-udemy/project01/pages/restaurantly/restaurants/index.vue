<template>
    <div>
        <Html :lang="dynamic > 50 ? 'en-GB': 'eb-US'">
            <Head>
                <Title>Top 50 Restaurants | Restaurantly</Title>
                <Meta name="description" content="this page is cool" />
                <Link rel="preload" href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" as="script" />
            </Head>
        </Html>
        <NuxtLayout name="restaurantly-woad">
            <div class="container">
                <RestaurantlyTable />
            </div>
        </NuxtLayout>
    </div>
</template>


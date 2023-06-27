
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    
    publicRuntimeConfig: {
        WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
    },
    privateRuntimeConfig: {},
    css: [
        "~/assets/css/tailwind.css"
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },

    modules: [
        "@nuxt/ui",
    ]

})


<script setup>
  const themeConfig = useRuntimeConfig().theme
  const foo = useFoo()
  const bar = getBar()
  let count = $ref(0)

function inc () {
  count++
}
function dec () {
  count--
}

// see ../compoables/locale.ts for the implementation
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)

</script>

<template>
  <NuxtExampleLayout example="advanced/config-extends">
    theme runtimeConfig
    <pre>{{ JSON.stringify(themeConfig, null, 2) }}</pre>
    <BaseButton>Base Button</BaseButton>
    <FancyButton>Fancy Button</FancyButton>
    <UIButton>UI Button</UIButton>
    <br>
    {{ foo }} {{ bar }}
    <br>
    {{ $myPlugin() }}
    <a href="/app1/"><span>App1 link</span></a> 
  <br />
   <a href="/teleport/"><span>App2 link</span></a>
   <br />
    <a href="/components/"><span>App3 link</span></a>
    <br />
    Go to <NuxtLink to="/test">
      Test Page
    </NuxtLink>
    <div>
      <Label :count="count" />
      <div class="flex gap-1 justify-center">
        <NButton @click="inc()">
          Inc
        </NButton>
        <NButton @click="dec()">
          Dec
        </NButton>
      </div>
    </div>

    <h1 class="text-xl opacity-50">
      Nuxt birthday
    </h1>
    <p class="text-4xl">
      {{ date }}
    </p>
    <div class="mt-4" />
    <label for="locale-chooser">Preview a different locale</label>
    <select id="locale-chooser" v-model="locale" class="m-auto w-50 border n-border-base rounded p-1">
      <option v-for="l of locales" :key="l" :value="l">
        {{ l }}
      </option>
    </select>
    
  </NuxtExampleLayout>
</template>

<style scoped>
pre {
  text-align: left;
}
</style>
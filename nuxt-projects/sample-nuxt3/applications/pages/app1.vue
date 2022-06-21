<script setup>
const version = 2 + 1
</script>

<template>
 
    <NuxtExampleLayout example="app/plugins">
     
      <div class="hello">
        <div>
          Hello Nuxt {{ version }}!
        </div>
   
      <div>{{ $myPlugin() }}</div>
      </div>
    </NuxtExampleLayout>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>




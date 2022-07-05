<script setup lang="ts">
  import {Gender, Popularity, Length, names} from "@/data";

    interface OptionsState {
        gender: Gender,
        popularity: Popularity,
        length: Length
    }
    const page_options = reactive<OptionsState>({
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  })

  const options2 = reactive({
    gender: 'Girl',
    popularity: 'Trendy',
    length: 'Short'
  })

  const selectedNames = ref<string[]>([]);

  const computeSelectedNames = () => {
    const filterNames = names
        .filter((name) => name.gender === page_options.gender)
        .filter((name) => name.popularity === page_options.popularity)
        .filter((name) => {
            if (page_options.length === Length.ALL) return true
            else return name.length == page_options.length
        })
    
    selectedNames.value = filterNames.map(name=> name.name);
  }

  const removeNames = (index: number) => {
    console.log("there", index);
    const filteredNames = [...selectedNames.value];
    filteredNames.splice(index, 1);
    selectedNames.value = filteredNames;
  }

  const optionArray = [
    {
        title: "1) Choose a gender?",
        category: "gender",
        buttons: [Gender.BOY, Gender.UNISEX, Gender.GIRL]
    },
    {
        title: "2) Choose the name's popularity?",
        category: "popularity",
        buttons: [Popularity.TRENDY, Popularity.UNIQUE]
    },
    {
        title: "3) Choose name's length?",
        category: "length",
        buttons: [Length.LONG, Length.ALL, Length.SHORT]
    }
  ]

</script>


<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Name" button below</p>
    <div class="options-container">
      <Option 
        v-for="option in optionArray" 
        :key="option.title" 
        :option="option" 
        :options="page_options" 
        />
      <button class="primary" 
      @click="computeSelectedNames"> Find Names </button>
    </div>
    <div class="cards-container">
        <CardName 
            v-for="(name, index) in selectedNames" 
            :key="name" 
            :name="name" 
            :index="index"
            @remove="() => removeNames(index)"
        />
    </div>
    {{ selectedNames }}
  </div>
</template>


<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}
.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}



.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}


.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}


</style>

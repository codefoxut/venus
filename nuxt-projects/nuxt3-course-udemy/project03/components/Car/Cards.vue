<script setup>
	const { cars } = useCars();
	const favorite = useLocalStorage("favorite", {});

	const handleFavorite = (id) => {
		if (id in favorite.value) {
			delete favorite.value[id];
		} else {
			favorite.value = {
				...favorite.value,
				[id]: true,
			};
		}
	};
</script>

<template>
	<!-- CARD CARDS -->
	<div class="w-full">
			<CarCard
				v-for="car in cars"
				:key="car.id"
				:car="car"
				@favor="handleFavorite"
				:favored="car.id in favorite"
			/>
	</div>
	<!-- CARD CARDS -->
</template>

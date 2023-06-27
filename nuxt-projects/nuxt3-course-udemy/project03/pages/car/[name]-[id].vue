<script setup>
	const route = useRoute();
	const { toTitleCase } = useUtilities();
	const { cars } = useCars();
	useHead({
		title: `${toTitleCase(route.params.name)} Cars`,
	});

	const car = computed(() => {
		return cars.find((c) => {
			return c.id === parseInt(route.params.id);
		});
	});

	if (!car.value) {
		throw createError({
			statusCode: 404,
			message: `Car with id of ${route.params.id} does not exist.`,
		});
	}
	definePageMeta({ layout: "custom" });
</script>

<template>
	<div v-if="car">
		<!-- CAR DETAIL PAGE -->
		<CarDetailHero :car="car" />
		<CarDetailAttributes :features="car.features" />
		<CarDetailDescription :description="car.description" />

		<CarDetailContact />
	</div>
	<!-- CAR DETAIL PAGE   -->
</template>

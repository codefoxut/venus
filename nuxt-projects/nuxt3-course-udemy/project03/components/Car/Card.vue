<script setup>
	const props = defineProps({
		car: Object,
	});
</script>

<template>
	<!-- CAR CARD -->
	<div
		class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
		@click="navigateTo(`/car/${car.name}-${car.id}`)"
	>
		<div class="flex h-full">
			<img class="w-[300px] h-full" :src="car.url" alt="" />
			<div class="p-4 flex flex-col">
				<div>
					<h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
					<p class="text-grey-700">
						{{ car.description }}
					</p>
				</div>
				<h1 class="mt-auto text-xl">${{ car.price }}</h1>
			</div>
		</div>
	</div>
	<!-- CAR CARD -->
</template>

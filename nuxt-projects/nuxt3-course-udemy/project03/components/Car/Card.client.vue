<script setup>
	import heartFilled from "@/assets/heartFilled.png";
	import heartOutline from "@/assets/heartOutline.png";
	const props = defineProps({
		car: Object,
		favored: Boolean,
	});
	// const favored = useState(`favored-${props.car.id}`, () => {
	// 	return false;
	// });
	const emit = defineEmits("favor");
</script>

<template>
	<!-- CAR CARD -->
	<div
		class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
	>
		<img
			class="absolute w-7 right-5 top-2 z-20"
			:src="favored ? heartFilled : heartOutline"
			alt=""
			@click="emit('favor', car.id)"
		/>
		<div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
			<NuxtImg class="w-[300px] h-full -z-1" :src="car.url" />
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

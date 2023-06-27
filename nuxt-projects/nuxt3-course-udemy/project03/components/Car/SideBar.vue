<script setup>
	const modal = ref({
		location: false,
		make: false,
		price: false,
	});
	const route = useRoute();
	const city = ref("");

	const updateModal = (key) => {
		modal.value[key] = !modal.value[key];
	};
	const onChangeLocation = () => {
		if (!city.value) return;
		if (!isNaN(parseInt(city.value))) {
			throw createError({
				statusCode: 400,
				message: "Invalid city"
			})
		}
		updateModal("location");
		const path = `/city/${city.value}/car`;
		if (route.params.make) {
			path += `/${route.params.make}`;
		}
		navigateTo(path);
	};
</script>

<template>
	<div>
		<!-- CARD SIDE BAR -->
		<div class="shadow border w-64 mr-10 z-30 h-[190px]">
			<div class="p-5 flex justify-between relative cursor-pointer border-b">
				<h3>Location</h3>
				<h3 @click="updateModal('location')" class="text-blue-400 capitalize">
					{{ route.params.city }}
				</h3>
				<div
					v-if="modal.location"
					class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
				>
					<input type="text" class="border p-1 rounded" v-model="city" />
					<button
						class="bg-blue-400 w-full mt-2 rounded test-white p-1"
						@click="onChangeLocation"
					>
						Apply
					</button>
				</div>
			</div>

			<div class="p-5 flex justify-between relative cursor-pointer border-b">
				<h3>Make</h3>
				<h3 @click="updateModal('make')" class="text-blue-400 capitalize">Toyota</h3>
				<div
					v-if="modal.make"
					class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
				>
					<input type="text" class="border p-1 rounded" />
					<button class="bg-blue-400 w-full mt-2 rounded test-white p-1">Apply</button>
				</div>
			</div>

			<div class="p-5 flex justify-between relative cursor-pointer border-b">
				<h3>Price</h3>
				<h3 @click="updateModal('price')" class="text-blue-400 capitalize">Any</h3>
				<div
					v-if="modal.price"
					class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
				>
					<input type="text" class="border p-1 rounded" />
					<button class="bg-blue-400 w-full mt-2 rounded test-white p-1">Apply</button>
				</div>
			</div>
		</div>
		<!-- CARD SIDE BAR -->
	</div>
</template>

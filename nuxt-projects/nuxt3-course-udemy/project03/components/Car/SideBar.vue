<script setup>
	const { _, makes } = useCars();
	const modal = ref({
		location: false,
		make: false,
		price: false,
	});
	const route = useRoute();
	const router = useRouter();
	const city = ref("");
	const priceRange = ref({
		max: "",
		min: "",
	});

	const priceRangeText = computed(() => {
		const minPrice = route.query.minPrice;
		const maxPrice = route.query.maxPrice;

		if (!minPrice && !maxPrice) return "Any";
		else if (!minPrice && maxPrice) return `< $${maxPrice}`;
		else if (!maxPrice) return `> $${minPrice}`;
		else return `$${minPrice} - $${maxPrice}`;
	});

	const updateModal = (key) => {
		modal.value[key] = !modal.value[key];
	};
	const onChangeLocation = () => {
		if (!city.value) return;
		if (!isNaN(parseInt(city.value))) {
			throw createError({
				statusCode: 400,
				message: "Invalid city",
			});
		}
		updateModal("location");
		const path = `/city/${city.value}/car`;
		if (route.params.make) {
			path += `/${route.params.make}`;
		}
		navigateTo(path);
	};

	const onChangeMake = (make) => {
		if (!make) return;
		updateModal("make");
		const path = `/city/${route.params.city}/car/${make}`;
		navigateTo(path);
	};

	const onChangePrice = () => {
		updateModal("price");
		if (priceRange.value.min && priceRange.value.max) {
			if (priceRange.value.min > priceRange.value.max) return;
		}
		router.push({
			query: {
				minPrice: priceRange.value.min,
				maxPrice: priceRange.value.max,
			},
		});
	};
</script>

<template>
	<div>
		<!-- CARD SIDE BAR -->
		<div class="shadow border w-64 mr-10 h-[190px]">
			<!-- Location Start -->
			<div class="p-5 flex justify-between relative cursor-pointer border-b z-30">
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
			<!-- Location END -->

			<!-- MAKE Start -->
			<div class="p-5 flex justify-between relative cursor-pointer border-b z-30">
				<h3>Make</h3>
				<h3 @click="updateModal('make')" class="text-blue-400 capitalize">
					{{ route.params.make || Any }}
				</h3>
				<div
					v-if="modal.make"
					class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
				>
					<h4 v-for="make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)">
						{{ make }}
					</h4>
				</div>
			</div>
			<!-- MAKE END -->

			<!-- PRICE START -->
			<div class="p-5 flex justify-between relative cursor-pointer border-b z-30">
				<h3>Price</h3>
				<h3 @click="updateModal('price')" class="text-blue-400 capitalize">
					{{ priceRangeText }}
				</h3>
				<div
					v-if="modal.price"
					class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
				>
					<input
						type="number"
						placeholder="Min"
						v-model="priceRange.min"
						class="border p-1 rounded"
					/>
					<input
						type="number"
						placeholder="Max"
						v-model="priceRange.max"
						class="border p-1 rounded"
					/>
					<button
						class="bg-blue-400 w-full mt-2 rounded test-white p-1"
						@click="onChangePrice"
					>
						Apply
					</button>
				</div>
			</div>
			<!-- PRICE END -->
		</div>
		<!-- CARD SIDE BAR -->
	</div>
</template>

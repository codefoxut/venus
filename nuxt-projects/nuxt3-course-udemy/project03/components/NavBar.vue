<script setup>

</script>

<template>
	<!--- NAVBAR --->
	<header
		class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
	>
		<NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
		<div v-if="user" class="flex">
			<NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
			<p class="cursor-pointer" @click="logout">Logout</p>
		</div>
		<NuxtLink v-else to="/login">Login</NuxtLink>
	</header>
	<!--- NAVBAR --->
</template>

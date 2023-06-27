<template>
	<div>
		<!--- NAVBAR --->
		<header
			class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
		>
			<a class="text-3xl font-mono" href="/">cartrader</a>
		</header>
		<!--- NAVBAR --->

		<!-- CARS PAGE --->
		<div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 w-3/5">
			<div class="mt-32 flex">
				<CarSideBar />

				<CarCards />
			</div>
		</div>

		<!-- CARS PAGE --->
	</div>
</template>

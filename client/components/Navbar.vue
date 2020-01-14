<template>
	<div class="bg-white" id="navbar">
		<header>
			<v-container>
				<v-row class="align-items-center
				">
					<v-col lg="3" md="3" cols="6">
						<a href="/">
							<v-img
								class="w-100"
								src="https://aviata.kz/static/images/new/aviata-header-logo.png"
								alt="Авиабилеты в Казахстане - Aviata.kz"
							/>
						</a>
					</v-col>
					<v-col lg="6" md="9" cols="12" class="text-center">
						<h1 class="header">Поиск и бронирование билетов</h1>
						<v-step-item left-arrow>asdasd</v-step-item>
					</v-col>
					<v-col lg="3" class="text-right">
						<div class="h5">+7 (727) 22-55-055</div>
						<div class="h6">+7 (701) 065-33-33</div>
						<div class="h6">help@aviata.kz</div>
					</v-col>
				</v-row>
			</v-container>
		</header>
	</div>
</template>

<script>
export default {
	data: () => ({
		appName: process.env.appName
	})
};
</script>
<style lang="scss">
@import "@/assets/sass/components/NavBar.scss";
</style>

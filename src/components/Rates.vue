<template>
	<v-container>
		<h2 v-if="isEngLanguage" class="my-5">
			Exchange rate relative to: 1{{ defaultCurrency.sign }},
			{{ defaultCurrency.name }}
		</h2>
		<h2 v-else class="my-5">
			Курс валют относительно: 1{{ defaultCurrency.sign }},
			{{ defaultCurrency.name }}
		</h2>
		<v-card>
			<v-list-item v-for="item in allCurrencies" :key="item.id" two-line>
				<v-list-item-content>
					<v-list-item-title>{{
						rates.results[item.name] + item.sign
					}}</v-list-item-title>
					<v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'Rates',
	computed: {
		allCurrencies() {
			return this.$store.getters.getAllCurrencies.filter(
				currency => currency.name !== this.defaultCurrency.name
			)
		},
		rates() {
			return this.$store.getters.getRates
		},
		defaultCurrency() {
			return this.$store.getters.getDefaultCurrency
		},
		isEngLanguage() {
			return this.$store.getters.getIsEngLanguage
		},
	},
}
</script>

<style></style>

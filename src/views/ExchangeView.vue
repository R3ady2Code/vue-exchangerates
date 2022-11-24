<template>
	<section class="exchange">
		<Loader v-if="isLoading && !rates" />
		<Rates v-if="rates" />
	</section>
</template>

<script>
import Loader from '@/components/Loader'
import Rates from '@/components/Rates'

export default {
	name: 'ExchangeView',
	components: {
		Loader,
		Rates,
	},
	computed: {
		isLoading() {
			return this.$store.getters.getIsLoading
		},
		rates() {
			return this.$store.getters.getRates
		},
		defaultCurrency() {
			return this.$store.getters.getDefaultCurrency
		},
	},
	async mounted() {
		await this.fetchExchanges()
	},
	watch: {
		rates: {
			async handler() {
				await this.fetchExchanges()
			},
		},
	},
	methods: {
		async fetchExchanges() {
			this.$store.commit('setIsLoading', true)
			await this.$store.dispatch('fetchExchanges', {
				currency: this.defaultCurrency,
			})
			this.$store.commit('setIsLoading', false)
		},
	},
}
</script>

<style></style>

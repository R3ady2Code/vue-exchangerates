<template>
	<section class="home">
		<v-container>
			<Dialog class="btn_dialog" />
			<div class="mt-5 d-flex align-center">
				<v-text-field
					v-model="requestText"
					class="mr-3"
					:label="isEngLanguage ? 'How much will be...' : 'Сколько будет...'"
				></v-text-field>
				<v-btn @click="sendRequest" elevation="2" color="primary">submit</v-btn>
			</div>
			<v-expand-transition>
				<h2 v-if="showResponse && rates && isEngLanguage">
					It will be: {{ rates * values[0] + values[3].toUpperCase() }}
				</h2>
				<h2 v-if="showResponse && rates && !isEngLanguage">
					Это будет: {{ rates * values[0] + values[3].toUpperCase() }}
				</h2>
			</v-expand-transition>
		</v-container>
	</section>
</template>

<script>
import Dialog from '@/components/Dialog'

export default {
	name: 'Home',
	data: () => ({
		requestText: '',
		showResponse: false,
	}),
	components: {
		Dialog,
	},
	computed: {
		values() {
			return this.requestText.split(' ')
		},
		rates() {
			return this.$store.getters.getRates.results[this.values[3].toUpperCase()]
		},
		isEngLanguage() {
			return this.$store.getters.getIsEngLanguage
		},
	},
	methods: {
		async sendRequest() {
			this.showResponse = false
			await this.$store.dispatch('fetchExchanges', {
				currency: { name: this.values[1] },
			})
			this.showResponse = true
		},
	},
	watch: {
		requestText: {
			handler() {
				this.showResponse = false
			},
		},
	},
}
</script>

<style>
.btn_dialog {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
}
</style>

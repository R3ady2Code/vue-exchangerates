<template>
	<v-app-bar app color="deep-orange" dark>
		<div class="d-flex mr-5">
			<v-toolbar-title class="headline"> ExchangeRateApp </v-toolbar-title>
		</div>
		<v-tabs v-if="isEngLanguage">
			<v-tab to="/">Home</v-tab>
			<v-tab to="/exchange">Exchange</v-tab>
		</v-tabs>
		<v-tabs v-else>
			<v-tab to="/">Домой</v-tab>
			<v-tab to="/exchange">Курс валют</v-tab>
		</v-tabs>

		<v-spacer></v-spacer>

		<v-select
			v-model="defaultCurrency"
			:items="allCurrencies"
			item-text="sign"
			item-value="name"
			persistent-hint
			hide-details
			return-object
			single-line
			class="mr-5"
		>
		</v-select>
		<v-btn color="deep-orange" elevation="0" @click="changeLanguage">
			{{ language }}
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Navigation',
	computed: {
		defaultCurrency: {
			get() {
				return this.$store.getters.getDefaultCurrency
			},
			set(newValue) {
				this.$store.commit('setDefaultCurrency', newValue)
			},
		},
		allCurrencies() {
			return this.$store.getters.getAllCurrencies
		},
		language() {
			return this.$store.getters.getLanguage
		},
		isEngLanguage() {
			return this.$store.getters.getIsEngLanguage
		},
	},
	methods: {
		changeLanguage() {
			if (this.isEngLanguage) {
				this.$store.commit('setLanguage', 'ENG')
			} else {
				this.$store.commit('setLanguage', 'RUS')
			}
		},
	},
}
</script>

<style>
.v-select__selections {
	width: 20px;
}
</style>

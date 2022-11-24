import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_KEY = 'acdd4effa6-e5cb4b2398-rltaof'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		language: 'RUS',
		defaultСurrency: { id: 3, name: 'RUB', sign: '₽' },
		isLoading: false,
		allCurrencies: [
			{ id: 1, name: 'USD', sign: '$' },
			{ id: 2, name: 'EUR', sign: '€' },
			{ id: 3, name: 'RUB', sign: '₽' },
			{ id: 4, name: 'UAH', sign: '₴' },
			{ id: 5, name: 'GEL', sign: '₾' },
		],
		rates: {},
	},
	getters: {
		getDefaultCurrency: state => state.defaultСurrency,
		getIsLoading: state => state.isLoading,
		getAllCurrencies: state => state.allCurrencies,
		getRates: state => state.rates,
		getLanguage: state => state.language,
		getIsEngLanguage: state => state.language === 'RUS',
	},
	mutations: {
		setDefaultCurrency(state, payload) {
			state.defaultСurrency = payload
		},
		setIsLoading(state, payload) {
			state.isLoading = payload
		},
		setRates(state, payload) {
			state.rates = payload
		},
		setLanguage(state, payload) {
			state.language = payload
		},
	},
	actions: {
		async fetchExchanges({ commit }, { currency }) {
			const allCurrencies = ['RUB', 'USD', 'EUR', 'UAH', 'GEL'].filter(
				item => item !== currency.name
			)

			const { data } = await axios.get(
				`https://api.fastforex.io/fetch-multi?&from=${
					currency.name
				}&to=${allCurrencies.join()}&api_key=${API_KEY}`
			)

			commit('setRates', data)
		},
	},
	modules: {},
})

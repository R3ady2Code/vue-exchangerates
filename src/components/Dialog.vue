<template>
	<div class="text-center">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					class="btn_question"
					width="50"
					color="red lighten"
					dark
					v-bind="attrs"
					v-on="on"
					fab
				>
					?
				</v-btn>
			</template>

			<v-card v-if="isEngLanguage">
				<v-card-title class="text-h5 grey lighten-2">
					Examples of requests
				</v-card-title>

				<v-card-text class="pt-3">
					15 usd in rub <br />
					12 gel in eur <br />
					10 eur in usd
				</v-card-text>

				<v-card-subtitle>
					Available currencies: USD, EUR, RUB, GEL, UAH
				</v-card-subtitle>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false"> OK </v-btn>
				</v-card-actions>
			</v-card>

			<v-card v-else>
				<v-card-title class="text-h5 grey lighten-2">
					Примеры запросов
				</v-card-title>

				<v-card-text class="pt-3">
					15 usd в rub <br />
					12 gel в eur <br />
					10 eur в usd
				</v-card-text>

				<v-card-subtitle>
					Доступные валюты: USD, EUR, RUB, GEL, UAH
				</v-card-subtitle>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false"> OK </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: 'Dialog',
	data() {
		return {
			dialog: false,
		}
	},
	computed: {
		isEngLanguage() {
			return this.$store.getters.getIsEngLanguage
		},
	},
}
</script>

<style>
.btn_question {
	border-radius: 50% !important;
	width: 60px !important;
	height: 60px !important;
	padding: 0 !important;
	font-size: 1.3em !important;
}
</style>

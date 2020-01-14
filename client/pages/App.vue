<template>
	<v-layout class="row">
		<v-col lg="3" md="3" sm="12" cols="12" class="filters pl-0">
			<filter-item v-for="filter in filters" :key="filter.alias" :filter="filter" />
			<a href="#" class="filter-resetall" @click.prevent="resetAllFilters">Сбросить все фильтры</a>
		</v-col>
		<v-col lg="9" md="9" sm="12" cols="12" class="px-0">
			<Flights v-for="flight in flights" :airlines="airlines" :key="flight.id" :flight="flight" />
		</v-col>
	</v-layout>
</template>

<script>
import axios from "axios";
import filterItem from "@/components/Filter.vue";
import Flights from "@/components/Flights.vue";

const airlines = [
	{ text: "Air Astana", value: "KC" },
	{ text: "Uzbekistan Airways", value: "HY" },
	{ text: "Emirates", value: "EK" },
	{ text: "HR", value: "HR" },
	{ text: "Flydubai", value: "FZ" },
	{ text: "S7 Airlines", value: "S7" },
	{ text: "Lufthansa", value: "LH" },
	{ text: "Air Baltic", value: "BT" },
	{ text: "China Southern Airlines", value: "CZ" },
	{ text: "Aeroflot", value: "SU" },
	{ text: "Belavia", value: "B2" },
	{ text: "SCAT Airlines", value: "DV" },
	{ text: "Turkish Airlines", value: "TK" }
];

const filters = [
	{
		checkAll: false,
		title: "Опции тарифа",
		alias: "options",
		data: [
			{ text: "Только прямые", value: "onlyDirectFlight" },
			{ text: "Только с багажом", value: "onlyWithLuggage" },
			{ text: "Только возвратные", value: "onlyReturnable" }
		]
	},
	{
		checkAll: true,
		title: "Авиакомпании",
		alias: "airlines",
		data: [...airlines]
	}
];

export default {
	head() {
		return { title: "Поиск билетов" };
	},
	components: {
		filterItem,
		Flights
	},
	data() {
		return {
      filters,
      airlines,
			flights: []
		};
	},
	computed: {
		$filters() {
			return this.$store.getters['filters/filters'];
		}
	},
	watch: {
		$filters(filterValues) {
			const data = {}
			filterValues.forEach((filter) => {
				(!data[filter.alias]) ? data[filter.alias] = [filter.value] : data[filter.alias].push(filter.value)
			})

			this.getFlights(data)
		}
	},
	methods: {
		resetAllFilters() {
			this.$store.commit("filters/UNSET_ALL_FILTERS");
		},
		async getFlights (data = null) {
			let resp;
			try {
				resp = await axios.get("/api/flights", { params: data });
				this.flights = resp.data;
			} catch (e) {
				if (e.response) {
					alert(e.response.data.message);
				} else {
					alert("Не удается подключиться к удаленному серверу!");
				}
			}
		}
	},
	created() {
		this.getFlights();
	}
};
</script>

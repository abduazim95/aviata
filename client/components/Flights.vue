<template>
	<v-card class="flights elevation-1 mb-5 overflow-hidden">
		<v-row class="ma-0 fill-height">
			<v-col lg="9">
				<v-row>
					<v-col lg="3" cols="12" class="d-flex align-items-center">
						<img class="carier_logo" :src="image(flight.validating_carrier)" />
            <span class="carrier_name">{{airline(flight.validating_carrier)}}</span>
					</v-col>
					<v-col lg="9" cols="12">
						<v-row class="flight-itinerary">
							<v-col class="datetime">
								<small>{{flight.itineraries[0][0].dep_date | date}}</small>
								<span class="datetime_date">{{flight.itineraries[0][0].dep_date | time}}</span>
							</v-col>
							<v-col lg="6" cols="12" class="text-center">
								<div class="layovers_duration">{{flight.itineraries[0][0].traveltime | duration}}</div>
								<div class="layovers_line"></div>
								<div class="layovers_stops forward">
									<span v-if="flight.itineraries[0][0].stops == 0">прямой рейс</span>
									<span v-else-if="flight.itineraries[0][0].stops == 1">{{'через ' + flight.itineraries[0][0].segments[0].airport_dest}}</span>
									<span v-else-if="flight.itineraries[0][0].stops > 1">{{flight.itineraries[0][0].stops + ' пересадки'}}</span>
								</div>
							</v-col>
							<v-col class="datetime">
								<small>{{flight.itineraries[0][0].arr_date | date}}</small>
								<span class="datetime_date">{{flight.itineraries[0][0].arr_date | time}}</span>
							</v-col>
						</v-row>
					</v-col>
        </v-row>
        <v-row>
          <v-col lg="3" cols="6" class="text-center"><a href="#" class="footer-link">Детали перелета</a></v-col>
          <v-col lg="3" cols="6"><a href="#" class="footer-link">Условия тарифа</a></v-col>
          <v-col lg="3" cols="12">
						<div v-if="!flight.refundable" class="refundable">
							<v-icon>fas fa-undo-alt</v-icon>
							<span>Невозвратный</span>
						</div>
					</v-col>
        </v-row>
			</v-col>
			<v-col class="bg-grey">
        <div class="price">
					<span>{{flight.price}} ₸</span>
					<v-button class="choose-btn" type="success" block color="#55BB06">
              Выбрать
					</v-button>
					<small>Цена за всех пассажиров</small>
				</div>
				<div class="luggage-service text-center">
					<small v-if="withLuggage">{{withLuggage}}</small>
					<small v-else>Нет багажа</small>
					<button class="add-luggage-btn">
						+ Добавить багаж
					</button>
				</div>
      </v-col>
		</v-row>
	</v-card>
</template>
<script>

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { formatDuration } from '@/utils'

export default {
	filters: {
		time(date) {
			// this.flight.itineraries[0].dep_date
			return format(Date.parse(date), 'kk:mm')
		},
		date(date) {
			return format(Date.parse(date), 'd LLL, EEEEEE.', { locale: ru })
		},
		duration (duration) {
			return formatDuration(duration * 1000)
		}
 	},
	props: {
		flight: {
			required: true
    },
    airlines: {
      required: true
    }
	},
	computed: {
		withLuggage () {
			const weight = this.flight.itineraries[0][0].segments[0].baggage_options[0].value
			const unit = this.flight.itineraries[0][0].segments[0].baggage_options[0].unit
			return (weight > 0) ? weight + unit : false
		}
	},
	methods: {
		image(code) {
			return `https://aviata.kz/static/airline-logos/80x80/${code}.png`;
    },
    airline (code) {
      return this.airlines.find(airline => airline.value === code).text
		}
	}
};
</script>
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(
  faArrowRight
)

Vue.component('fa', FontAwesomeIcon)

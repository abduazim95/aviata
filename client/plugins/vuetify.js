import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'fa' // default - only for display purposes
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}

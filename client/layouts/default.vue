<template>
  <v-app>
    <navbar />
    <div class="container mt-4">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

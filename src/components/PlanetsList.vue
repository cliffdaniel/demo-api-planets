<template>
  <div>
    <v-progress-circular
      v-if="loading"
      :size="50"
      :width="5"
      color="primary"
      indeterminate
      class="loader-container"
    ></v-progress-circular>
    <v-card
      v-else
      v-for="planet in planets"
      :key="planet.name"
      class="planet-card"
    >
      <v-card-title>{{ planet.name }}</v-card-title>
      <v-card-text>Climate: {{ planet.climate }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchPlanets } from "@/api/planetsApi";
import { Planet } from "@/models/Planet";

const planets = ref<Planet[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    planets.value = await fetchPlanets();
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});
</script>

<style scoped>
.loader-container {
  display: flex;
  margin: auto;
}

.planet-card {
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

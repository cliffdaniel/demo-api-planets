<template>
  <div>
    <v-container>
      <h1>Planet List</h1>
      <v-card>
        <v-card-text>
          <PlanetsList />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import PlanetsList from "@/components/PlanetsList.vue";
</script>

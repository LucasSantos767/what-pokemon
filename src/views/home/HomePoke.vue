<template>
  <div class="home d-flex justify-content-center">
    <div class="pokedex pt-5 d-flex justify-content-center">
      <img class="poketeste" :src="pokemon.sprites.front_default" alt="" />
      <img src="@/assets/img/pokedex.png" class="pokeimg" />
      <div class="FormD">
        <b-form><input type="text" class="inputP shadow-none" /></b-form>
        <div class="d-flex justify-content-between pt-4">
          <div class="status d-flex justify-content-center align-items-center">
            <h6>Lifes: 0</h6>
          </div>
          <div class="status d-flex justify-content-center align-items-center">
            <h6>Score: 0</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { http } from "@/services/api";
export default {
  data() {
    return {
      pokemon: [],
    }
  },
  created() {
    this.randowM();
  },
  methods: {
    async randowM() {
      http.get("pokemon/4").then((response) => (this.pokemon = response.data));
    },
  },
};
</script>

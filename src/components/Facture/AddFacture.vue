<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Prix</label>
      <input type="number" class="form-control" v-model="prix" />
    </div>
    <button type="button" class="btn btn-primary" @click="saveFacture()">
      Ajouter
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddFacture",
  data() {
    return {
      prix: "",
    };
  },
  methods: {
    async saveFacture() {
      try {
        await axios.post("http://127.0.0.1:8000/api/facture", {
          PRIX: this.prix,
        });
        this.$router.push("/facture");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

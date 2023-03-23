<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Prix</label>
      <input type="number" class="form-control" v-model="prix" />
    </div>
    <button type="button" class="btn btn-primary" @click="updateFacture()">
      Modifier
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditFacture",
  data() {
    return {
      prix: "",
    };
  },
  created() {
    this.getFactureById();
  },
  methods: {
    async getFactureById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/facture/${this.$route.params.id}`
        );
        this.prix = response.data.facture.PRIX;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async updateFacture() {
      await axios.put(
        `http://127.0.0.1:8000/api/facture/${this.$route.params.id}`,
        {
          PRIX: this.prix,
        }
      );
      this.$router.push("/facture");
    },
  },
};
</script>

<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Presentation</label>
      <input type="number" class="form-control" v-model="pres" />
    </div>
    <button type="button" class="btn btn-primary" @click="updateMed()">
      Modifier
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditMed",
  data() {
    return {
      name: "",
      pres: "",
    };
  },
  created() {
    this.getMedById();
  },
  methods: {
    async getMedById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/medicament/${this.$route.params.id}`
        );
        this.name = response.data.medicament.NOM;
        this.pres = response.data.medicament.PRESENTATION;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async updateMed() {
      await axios.put(
        `http://127.0.0.1:8000/api/medicament/${this.$route.params.id}`,
        {
          NOM: this.name,
          PRESENTATION: this.pres,
        }
      );
      this.$router.push("/med");
    },
  },
};
</script>

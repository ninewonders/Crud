<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Repos</label>
      <input type="date" class="form-control" v-model="date" />
    </div>
    <div class="mb-3">
      <label class="form-label">Nombre Jours Repos</label>
      <input type="number" class="form-control" v-model="nombre" />
    </div>
    <button type="button" class="btn btn-primary" @click="updateCert()">
      Modifier
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditCert",
  data() {
    return {
      date: "",
      nombre: "",
    };
  },
  created() {
    this.getCertById();
  },
  methods: {
    async getCertById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/certificat_medical/${this.$route.params.id}`
        );
        console.log(response);
        this.date = response.data.certificat_medical.DATE_REPOS;
        this.nombre = response.data.certificat_medical.NB_JRS_REPOS;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCert() {
      await axios.put(
        `http://127.0.0.1:8000/api/certificat_medical/${this.$route.params.id}`,
        {
          DATE_REPOS: this.date,
          NB_JRS_REPOS: this.nombre,
        }
      );
      this.$router.push("/cert");
    },
  },
};
</script>

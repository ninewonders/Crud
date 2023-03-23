<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Consultation</label>
      <input type="date" class="form-control" v-model="date_consult" />
    </div>
    <div class="mb-3">
      <label class="form-label">Taille</label>
      <input type="text" class="form-control" v-model="taille" />
    </div>
    <div class="mb-3">
      <label class="form-label">Poids</label>
      <input type="text" class="form-control" v-model="poids" />
    </div>
    <button type="button" class="btn btn-primary" @click="saveConsult()">
      Ajouter
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddPatient",
  data() {
    return {
      date_consult: "",
      taille: "",
      poids: "",
    };
  },
  methods: {
    async saveConsult() {
      try {
        await axios.post("http://127.0.0.1:8000/api/consultation", {
          DATE_CONSULT: this.date_consult,
          TAILLE: this.taille,
          POIDS: this.poids,
        });
        this.date_consult = "";
        this.taille = "";
        this.poids = "";
        this.$router.push("/consultation");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Prenom</label>
      <input type="text" class="form-control" v-model="surname" />
    </div>
    <div class="mb-3">
      <label class="form-label">Genre</label>
      <input type="text" class="form-control" v-model="gender" />
    </div>
    <div class="mb-3">
      <label class="form-label">Date naissance</label>
      <input type="date" class="form-control" v-model="birthday" />
    </div>
    <button type="button" class="btn btn-primary" @click="savePatient()">
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
      name: "",
      surname: "",
      gender: "",
      birthday: "",
    };
  },
  methods: {
    async savePatient() {
      try {
        await axios.post("http://127.0.0.1:8000/api/patient", {
          NOM: this.name,
          PRENOM: this.surname,
          GENRE: this.gender,
          DATE_NAISSANCE: this.birthday,
        });
        this.name = "";
        this.surname = "";
        this.gender = "";
        this.birthday = "";
        this.$router.push("/patient");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

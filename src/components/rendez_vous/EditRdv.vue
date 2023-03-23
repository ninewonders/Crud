<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date RendezVous </label>
      <input type="date" class="form-control" v-model="date" />
    </div>
    <div class="mb-3">
      <label class="form-label">Heure</label>
      <input type="text" class="form-control" v-model="hour" />
    </div>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="surname" />
    </div>
    <div class="mb-3">
      <label class="form-label">Prenom</label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Num tel</label>
      <input type="text" class="form-control" v-model="phone" />
    </div>
    <button type="button" class="btn btn-primary" @click="updatePatient()">
      Modifier
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditPatient",
  data() {
    return {
      name: "",
      surname: "",
      date: "",
      hour: "",
      phone: "",
    };
  },
  created() {
    this.getRdvById();
  },
  methods: {
    async getRdvById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/rendez_vous/${this.$route.params.id}`
        );
        console.log(response);
        this.date = response.data.date_rdv;
        this.hour = response.data.heure_rdv;
        this.surname = response.data.nom;
        this.name = response.data.prenom;
        this.phone = response.data.num_tel;
      } catch (error) {
        console.log(error);
      }
    },
    async updatePatient() {
      await axios.put(
        `http://127.0.0.1:8000/api/rendez_vous/${this.$route.params.id}`,
        {
          date_rdv: this.date,
          heure_rdv: this.hour,
          nom: this.surname,
          prenom: this.name,
          num_tel: this.phone,
        }
      );
      this.$router.push("/rdv");
    },
  },
};
</script>

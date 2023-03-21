<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="surname">
    </div>
    <div class="mb-3">
      <label class="form-label">Prenom</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="mb-3">
      <label class="form-label">Genre</label>
      <input type="text" class="form-control" v-model="gender">
    </div>
    <div class="mb-3">
      <label class="form-label">Date naissance</label>
      <input type="date" class="form-control" v-model="birthday">
    </div>
    <button type="button" class="btn btn-primary" @click="updatePatient()">Modifier</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "EditPatient",
  data(){
    return{
      surname:'',
      name:'',
      gender:'',
      birthday:''
    }
  },
  created(){
    this.getPatientById();
  },
  methods: {
    async getPatientById() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patient/${this.$route.params.id}`);
        this.surname = response.data.patient.NOM;
        this.name = response.data.patient.PRENOM;
        this.gender  = response.data.patient.GENRE;
        this.birthday = response.data.patient.DATE_NAISSANCE;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async updatePatient(){
      await axios.put(`http://127.0.0.1:8000/api/patient/${this.$route.params.id}`,{
        NOM:this.surname,
        PRENOM:this.name,
        GENRE:this.gender,
        DATE_NAISSANCE:this.birthday
      });
      this.$router.push('/');
    }
  }
}
</script>
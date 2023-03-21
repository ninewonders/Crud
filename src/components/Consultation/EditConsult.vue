<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Consultation</label>
      <input type="date" class="form-control" v-model="date_consult">
    </div>
    <div class="mb-3">
      <label class="form-label">Taille</label>
      <input type="text" class="form-control" v-model="taille">
    </div>
    <div class="mb-3">
      <label class="form-label">Poids</label>
      <input type="text" class="form-control" v-model="poids">
    </div>
    <button type="button" class="btn btn-primary" @click="updateConsult()">Modifier</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "EditPatient",
  data(){
    return{
      date_consult:'',
      taille:'',
      poids:''
    }
  },
  created(){
    this.getConsultById();
  },
  methods: {
    async getConsultById() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/consultation/${this.$route.params.id}`);
        this.date_consult = response.data.consultation.DATE_CONSULT;
        this.taille = response.data.consultation.TAILLE;
        this.poids  = response.data.consultation.POIDS;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async updateConsult(){
      await axios.put(`http://127.0.0.1:8000/api/consultation/${this.$route.params.id}`,{
        DATE_CONSULT:this.date_consult,
        TAILLE: this.taille,
        POIDS:this.poids,
      });
      this.$router.push('/consultation');
    }
  }
}
</script>
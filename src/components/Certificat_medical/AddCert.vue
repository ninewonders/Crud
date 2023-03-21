<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Repos</label>
      <input type="date" class="form-control" v-model="date">
    </div>
    <div class="mb-3">
      <label class="form-label">Nombre Jours Repos</label>
      <input type="number" class="form-control" v-model="nombre">
    </div>
    <button type="button" class="btn btn-primary" @click="saveCert()">Ajouter</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "AddCert",
  data(){
    return{
      date:'',
      nombre:''
    };
  },
  methods: {
  async saveCert(){
    try {
      await axios.post("http://127.0.0.1:8000/api/certificat_medical",
      {DATE_REPOS:this.date,
      NB_JRS_REPOS:this.nombre,
      });
      this.date = '';
      this.nombre = '';
      this.$router.push('/cert');
    } catch (error) {
      console.log(error);
    }
  }
}
}

</script>
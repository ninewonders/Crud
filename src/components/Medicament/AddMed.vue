<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="mb-3">
      <label class="form-label">Presentation</label>
      <input type="number" class="form-control" v-model="pres">
    </div>
    <button type="button" class="btn btn-primary" @click="saveMed()">Ajouter</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "AddMed",
  data(){
    return{
      name:'',
      pres:'',
    };
  },
  methods: {
  async saveMed(){
    try {
      await axios.post("http://127.0.0.1:8000/api/medicament",
      {NOM:this.name,PRESENTATION:this.pres});
      this.name = '';
      this.pres = '';
      this.$router.push('/med');
    } catch (error) {
      console.log(error);
    }
  }
}
}

</script>
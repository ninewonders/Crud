<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date RendezVous </label>
      <input type="date" class="form-control" v-model="date">
    </div>
    <div class="mb-3">
      <label class="form-label">Heure</label>
      <input type="text" class="form-control" v-model="hour">
    </div>
    <div class="mb-3">
      <label class="form-label">Nom</label>
      <input type="text" class="form-control" v-model="surname">
    </div>
    <div class="mb-3">
      <label class="form-label">Prenom</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="mb-3">
      <label class="form-label">Num tel</label>
      <input type="text" class="form-control" v-model="phone">
    </div>
    <button type="button" class="btn btn-primary" @click="saveRdv()">Ajouter</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "AddRdv",
  data(){
    return{
      name:'',
      surname:'',
      date:'',
      hour:'',
      phone:''
    };
  },
  methods: {
  async saveRdv(){
    try {
      await axios.post("http://127.0.0.1:8000/api/rendez_vous",
      {date_rdv:this.date,
      heure_rdv:this.hour,
      nom:this.surname,
      prenom:this.name,
      num_tel:this.phone,
      });
      this.name = '';
      this.surname = '';
      this.hour  = '';
      this.date = '';
      this.phone= '';
      this.$router.push('/rdv');
    } catch (error) {
      console.log(error);
    }
  }
}
}

</script>
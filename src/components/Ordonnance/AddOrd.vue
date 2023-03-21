<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Ordonnance</label>
      <input type="date" class="form-control" v-model="date">
    </div>
    <button type="button" class="btn btn-primary" @click="saveOrd()">Ajouter</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "AddPatient",
  data(){
    return{
      date:''
    };
  },
  methods: {
  async saveOrd(){
    try {
      await axios.post("http://127.0.0.1:8000/api/ordonnance",
      {DATE_ORDONNANCE:this.date});
      this.date = '';
      this.$router.push('/ord');
    } catch (error) {
      console.log(error);
    }
  }
}
}

</script>
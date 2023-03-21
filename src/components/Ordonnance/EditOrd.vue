<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Date Ordonnance</label>
      <input type="date" class="form-control" v-model="date">
    </div>
    <button type="button" class="btn btn-primary" @click="updateOrd()">Modifier</button>
  </form>
</template>

<script>
import axios from "axios";
export default{
  name: "EditOrd",
  data(){
    return{
      date:''
    }
  },
  created(){
    this.getOrdById();
  },
  methods: {
    async getOrdById() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/ordonnance/${this.$route.params.id}`);
        this.date = response.data.ordonnance.DATE_ORDONNANCE;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async updateOrd(){
      await axios.put(`http://127.0.0.1:8000/api/ordonnance/${this.$route.params.id}`,{
        DATE_ORDONNANCE:this.date
      });
      this.$router.push('/ord');
    }
  }
}
</script>
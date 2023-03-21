<template>
  <div >
    <router-link :to="{name: 'createconsult'}">Ajouter Consultation</router-link>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Date Consultation</th>
        <th scope="col">Taille</th>
        <th scope="col">Poids</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.DATE_CONSULT}}</td>
        <td>{{item.TAILLE}}</td>
        <td>{{item.POIDS}}</td>
        <td><router-link :to="{ name: 'editconsult', params:{id:item.id} }" class="btn btn-primary">Modifier</router-link>  <button type="button" class="btn btn-danger" @click="deleteConsult(item.id)">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script >
  import axios from "axios";

  export default{
    name: "ListConsult",
    data(){
      return{
        items:[]
      }    
    },
    created(){
      this.getConsults();
    },
    methods:{
      async getConsults(){
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/consultation");
          this.items = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteConsult(id){
        try {
          await axios.delete(`http://127.0.0.1:8000/api/consultation/${id}`);
          this.getConsults();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
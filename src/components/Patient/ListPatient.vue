<template>
  <div >
    <router-link :to="{name: 'createpatient'}">Ajouter Patient</router-link>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Prenom</th>
        <th scope="col">Genre</th>
        <th scope="col">Date naissance</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.NOM}}</td>
        <td>{{item.PRENOM}}</td>
        <td>{{item.GENRE}}</td>
        <td>{{item.DATE_NAISSANCE}}</td>
        <td>
          <router-link :to="{ name: 'editpatient', params:{id:item.id} }" class="btn btn-primary">Modifier</router-link>  
          <button type="button" class="btn btn-danger" @click="deletePatient(item.id)">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script >
  import axios from "axios";

  export default{
    name: "ListPatient",
    data(){
      return{
        items:[]
      }    
    },
    created(){
      this.getPatients();
    },
    methods:{
      async getPatients(){
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/patient");
          this.items = response.data;
        } catch (error) { 
          console.log(error);
        }
      },
      async deletePatient(id){
        try {
          await axios.delete(`http://127.0.0.1:8000/api/patient/${id}`);
          this.getPatients();
        } catch (error) {
          console.log(error);
        }
      },
    }
  }
</script>
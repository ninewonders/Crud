<template>
  <div >
    <router-link :to="{name: 'createcert'}">Ajouter Certificat Medical</router-link>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Date Repos</th>
        <th scope="col">Nombre Jours Repos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.DATE_REPOS}}</td>
        <td>{{item.NB_JRS_REPOS}}</td>
        <td><router-link :to="{ name: 'editcert', params:{id:item.id} }" class="btn btn-primary">Modifier</router-link>  <button type="button" class="btn btn-danger" @click="deleteCert(item.id)">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script >
  import axios from "axios";

  export default{
    name: "ListCert",
    data(){
      return{
        items:[]
      }    
    },
    created(){
      this.getCerts();
    },
    methods:{
      async getCerts(){
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/certificat_medical");
          this.items = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteCert(id){
        try {
          await axios.delete(`http://127.0.0.1:8000/api/certificat_medical/${id}`);
          this.getCerts();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
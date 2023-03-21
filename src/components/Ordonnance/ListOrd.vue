<template>
  <div >
    <router-link :to="{name: 'createord'}">Ajouter Ordonnance</router-link>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Date Ordonnance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.DATE_ORDONNANCE}}</td>
        <td><router-link :to="{ name: 'editord', params:{id:item.id} }" class="btn btn-primary">Modifier</router-link>  <button type="button" class="btn btn-danger" @click="deleteOrd(item.id)">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script >
  import axios from "axios";

  export default{
    name: "ListOrd",
    data(){
      return{
        items:[]
      }    
    },
    created(){
      this.getOrds();
    },
    methods:{
      async getOrds(){
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/ordonnance");
          this.items = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteOrd(id){
        try {
          await axios.delete(`http://127.0.0.1:8000/api/ordonnance/${id}`);
          this.getOrds();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
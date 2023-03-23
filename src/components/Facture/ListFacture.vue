<template>
  <div>
    <router-link :to="{ name: 'createfacture' }">Ajouter Facture</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.PRIX }}</td>
          <td>
            <router-link
              :to="{ name: 'editfacture', params: { id: item.id } }"
              class="btn btn-primary"
              >Modifier</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteFacture(item.id)"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListFacture",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getFactures();
  },
  methods: {
    async getFactures() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/facture");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteFacture(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/facture/${id}`);
        this.getFactures();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

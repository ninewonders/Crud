<template>
  <div>
    <router-link :to="{ name: 'createmed' }">Ajouter Medicament</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Presentation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.NOM }}</td>
          <td>{{ item.PRESENTATION }}</td>
          <td>
            <router-link
              :to="{ name: 'editmed', params: { id: item.id } }"
              class="btn btn-primary"
              >Modifier</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteMed(item.id)"
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
  name: "ListMed",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getMeds();
  },
  methods: {
    async getMeds() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/medicament"
        );
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMed(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/medicament/${id}`);
        this.getMeds();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

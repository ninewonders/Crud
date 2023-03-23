<template>
  <div>
    <router-link :to="{ name: 'createrdv' }">Ajouter Rendez Vous</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date Rendez Vous</th>
          <th scope="col">Heure</th>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Num tel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.date_rdv }}</td>
          <td>{{ item.heure_rdv }}</td>
          <td>{{ item.nom }}</td>
          <td>{{ item.prenom }}</td>
          <td>{{ item.num_tel }}</td>
          <td>
            <router-link
              :to="{ name: 'editrdv', params: { id: item.id } }"
              class="btn btn-primary"
              >Modifier</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteRdv(item.id)"
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
  name: "ListRdv",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getRdvs();
  },
  methods: {
    async getRdvs() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/rendez_vous"
        );
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteRdv(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/rendez_vous/${id}`);
        this.getRdvs();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div>
    <router-link :to="{ name: 'createser' }">Ajouter Service</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nom Service</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.NOM_SERVICE }}</td>
          <td>{{ item.PRIX }}</td>
          <td>
            <router-link
              :to="{ name: 'editser', params: { id: item.id } }"
              class="btn btn-primary"
              >Modifier</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteSer(item.id)"
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
  name: "ListSer",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getSers();
  },
  methods: {
    async getSers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/service");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteRdv(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/service${id}`);
        this.getSers();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

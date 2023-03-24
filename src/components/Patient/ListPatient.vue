<template>
  <div>
    <router-link :to="{ name: 'createpatient' }">Ajouter Patient</router-link>
    <div>
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
          <tr v-for="item in pageOfItems" :key="item.id">
            <td>{{ item.NOM }}</td>
            <td>{{ item.PRENOM }}</td>
            <td>{{ item.GENRE }}</td>
            <td>{{ item.DATE_NAISSANCE }}</td>
            <td>
              <router-link
                :to="{ name: 'editpatient', params: { id: item.id } }"
                class="btn btn-primary"
                >Modifier</router-link
              >
              <button
                type="button"
                class="btn btn-danger"
                @click="deletePatient(item.id)"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="card-footer pb-0 pt-3">
        <jw-pagination
          :items="items"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListPatient",
  data() {
    return {
      items: [],
      pageOfItems: [],
    };
  },
  created() {
    this.getPatients();
    this.onChangePage();
  },
  methods: {
    async getPatients() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/patient");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deletePatient(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/patient/${id}`);
        this.getPatients();
      } catch (error) {
        console.log(error);
      }
    },
    async onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

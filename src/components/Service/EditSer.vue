<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Nom Service </label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Prix</label>
      <input type="text" class="form-control" v-model="price" />
    </div>
    <button type="button" class="btn btn-primary" @click="updateSer()">
      Modifier
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditSer",
  data() {
    return {
      name: "",
      price: "",
    };
  },
  created() {
    this.getSerById();
  },
  methods: {
    async getSerById() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/service/${this.$route.params.id}`
        );
        console.log(response);
        this.name = response.data.service.NOM_SERVICE;
        this.price = response.data.service.PRIX;
      } catch (error) {
        console.log(error);
      }
    },
    async updateSer() {
      await axios.put(
        `http://127.0.0.1:8000/api/service/${this.$route.params.id}`,
        {
          NOM_SERVICE: this.name,
          PRIX: this.price,
        }
      );
      this.$router.push("/ser");
    },
  },
};
</script>

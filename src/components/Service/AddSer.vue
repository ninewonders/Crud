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
    <button type="button" class="btn btn-primary" @click="saveSer()">
      Ajouter
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddSer",
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    async saveSer() {
      try {
        await axios.post("http://127.0.0.1:8000/api/service", {
          NOM_SERVICE: this.name,
          PRIX: this.price,
        });
        this.name = "";
        this.price = "";
        this.$router.push("/ser");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label>Title</label>
      <input v-model="data.title" class="form-control" name="title">
    </div>

    <div class="mb-3">
      <label>Description</label>
      <input v-model="data.description" class="form-control" name="description">
    </div>

    <div class="mb-3">
      <label>Image</label>
      <input v-model="data.image" class="form-control" name="image">
    </div>

    <div class="mb-3">
      <label>Price</label>
      <input v-model="data.price" class="form-control" name="price">
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>


<script lang="ts">
import {reactive} from "vue";
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "ProductCreate",
  setup() {
    const router = useRouter();

    const data = reactive({
      title: '',
      description: '',
      image: '',
      price: '',
    });

    const submit = async () => {
      await axios.post('products', data);

      await router.push('/products');
    }

    return {
      data,
      submit
    };
  }
}
</script>
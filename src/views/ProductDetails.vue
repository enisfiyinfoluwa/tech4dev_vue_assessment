<template>
  <div>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="product" class="mx-16 mt-6">
        <img class="w-[81.9rem] h-[30rem] object-scale-down" :src="product.image" :alt="product.title">
        <h2 class= "mt-12 font-bold text-2xl">{{product.title}}</h2>
        <div>
            <p class="mt-4"> <strong class= "text-[#9B51E0] ">Category:</strong> {{product.category}} <strong class= "text-[#9B51E0]">Rating:</strong> {{product.rating.rate}} ({{product.rating.count}} reviews)</p>
            <p></p> 
        </div>
        <div class= "mt-12">
            <p><strong>Product Description:</strong> </p>
            <p class="mt-5 w-[54.6rem]">{{product.description}}</p>
        </div>


        <p class="mt-10 mb-5"><strong>Price:</strong></p>
        <div class="flex ">
            <div>
                <p class="text-xl font-medium">
                    Single 
                </p>
                <p class= "text-[#9B51E0] text-base font-bold">
                    ${{product.price}}
                </p>
            </div>
            <div class= "ml-16">
                <p class="text-xl font-medium">
                    Pair 
                </p>
                <p class= "text-[#9B51E0] text-base font-bold">
                    ${{2* product.price -(0.1*product.price)}}
                </p>
            </div>
        </div>
        <button class=" my-6 w-40 h-11  font-sans font-semibold text-base text-white bg-[#783EAD] rounded-xl ">Buy now</button>
        <div class="mb-36"></div>



        
    </div>
    <div v-else>
      <p>Product not found</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      product: null,
      isLoading: false,
    };
  },
  setup() {
    const route = useRoute(); // Access route parameters
    return { route };
  },
  mounted() {
    this.fetchSingleProduct();
  },
  methods: {
    async fetchSingleProduct() {
      this.isLoading = true;
      try {
        const productId = this.route.params.id; // Get product ID from route
        console.log("Fetching product with ID:", productId);
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        this.product = res.data; // Set product data
      } catch (e) {
        console.error("Error fetching product:", e);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<script>
import axios from "axios"

export default{
    data(){
        return{
            products: [],
            product: null,
            isLoading: false
        }
    },
    mounted(){
        this.fetchProducts();
        console.log (this.products)
    },
    methods: {
        async fetchProducts(){
            this.isLoading= true;
            try{
                const res= await axios.get("https://fakestoreapi.com/products");
                this.products= res.data;

            }catch(e){
                console.log(e)
            } finally{
                this.isLoading= false
            }
        },

        navigateToProduct(product){
            console.log("NAvigate to prodct clicked")
            const product_id = product.id;    // confirm if product should be in data
            console.log(product_id)
            this.$router.push({name:"ProductDetails", params:{id:product_id}})
        },
        
        // getEachProduct(){
        //     products.forEach((p) => {
        //     const newProduct = new Product(p)
        //     createEventCard(newProduct, container);
        // })}
        
    }
}

</script>

<template>

    <div>
        <div class="flex place-content-between m-16">
            <h2 class="text-3xl font-semibold">Trending events</h2>
            <a href="#" class="text-[#432361] text-base font-semibold">View all trending events <i class="bi text-[#432361] bi-arrow-up-right"></i></a>
        </div>  
        <div>
            <div id="storeItems" class="grid grid-cols-3 mx-16 gap-6">
                <div v-for="product in products" :key="product.id" class = "event_card border rounded-lg border-gray-200">
                    <div >
                        <img  :src="product.image" :alt="product.title" class= "h-60 w-96 object-cover hover:object-scale-down">
                    </div>
                    <div class="event_content m-6">
                        <p class="event_title font-semibold">
                            {{product.title}}
                        </p>
                        <div class="flex">
                            <p>Rating</p> <ul class="list-disc ml-6"> <li class=""> {{product.rating.rate}} </li></ul>
                        </div>
                        <div class="text-sm mt-4">{{product.description}} </div>
                        <button @click="navigateToProduct(product)" class="text-[#432361] text-sm mt-4 font-semibold"> View details <i class="bi bi-arrow-up-right"></i></button>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="flex m-16">
        <div class="w-[52.6rem]">
            <h1 class="text-3xl font-semibold w-96">Discover a World of Events Tailored Just for You</h1>
            <button class=" my-6 w-40 h-11  font-sans font-semibold text-base text-white bg-[#783EAD] rounded-xl ">View all events</button>
            
        </div>
        <div class="grid grid-cols-2 gap-6 ">
            <div class="relative">
                <img src="/online-events.png" class="w-[29.13rem] h-60">
                <div class="absolute inset-0 opacity-50 bg-black rounded-md"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-2xl font-semibold">Online Events</h2>
                </div>
            </div>
            <div class="relative">
                <img src="/physical-events.png" class="w-[29.13rem] h-60">
                <div class="absolute inset-0 opacity-50 bg-black rounded-md"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-2xl font-semibold">Physical Events</h2>
                </div>
            </div>
            <div class="relative">
                <img src="/hybrid-events.png" class="w-[29.13rem] h-60">
                <div class="absolute inset-0 opacity-50 bg-black rounded-md"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-2xl font-semibold">Hybrid Events</h2>
                </div>
            </div>
            
            
        

        </div>
    </div>

</template>

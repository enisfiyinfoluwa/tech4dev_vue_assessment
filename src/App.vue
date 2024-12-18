<script >
import {RouterLink, RouterView} from "vue-router"
import {useRoute} from "vue-router"
import {computed} from "vue"

import NavbarHome from "./components/NavbarHome.vue"
import NavbarSingleProduct from "./components/NavbarSingleProduct.vue"
import Footer from "./components/Footer.vue"




export default{
  components:{
    NavbarHome,
    NavbarSingleProduct,
    Footer
  },
  setup(){
    const route = useRoute();

    const showNavbar= computed(()=> route.path==="/")
    return {showNavbar}
  }
}

</script>

<template>
  <div>

  </div>
  <NavbarHome v-if=showNavbar />
  <NavbarSingleProduct v-else/>

  
  <RouterView/>
  <Footer/>
</template>



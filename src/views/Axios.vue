<template>

    	<v-card
		 :loading="loading"
		 class="mx-auto my-12"
		 max-width="800"
		 elevation="12"
		 color="white">
         <h1>Axios Demo</h1>
       
        <p>{{personatoRR}} </p>
         
 
    
    
</v-card>
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'


  const  personatoRR=ref([])


  async function getPersonator () {
       axios({
                method:'get',
                url: 'https://personator2.p.rapidapi.com/v3/WEB/ContactVerify/doContactVerify',
                params: {
    act: 'check,verify,append,move',
    state: 'ca',
    format: 'json',
    a1: '22382 avenida empresa',
    city: 'rsm'
  },
  headers: {
    'X-RapidAPI-Key': '6337a3b3b6mshdf42295427ad5d6p15a551jsn6a13088ebfa4',
    'X-RapidAPI-Host': 'personator2.p.rapidapi.com'
  }
            }).then( response => {
       personatoRR.value=(response.data)
       console.log(personatoRR.value)
      })
  
  }


   onMounted( async () => {
       await getPersonator()
   })

  
</script>


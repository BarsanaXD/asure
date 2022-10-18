<template>
	<v-card
		 :loading="loading"
		 class="mx-auto my-12"
		 max-width="800"
		 elevation="12"
		 color="white"
	
	  >
		<v-img fill-height
		  src="https://t4.ftcdn.net/jpg/02/38/56/47/360_F_238564757_L7gsykjvZe2Sdtnyfa0mHd0fObHU4f5G.jpg" 
		  class="mb-5">
  
		</v-img>
  
  
		<div style="padding: 10px;">
		  <v-row style="margin: 5px;">
		  <v-col
			cols="12"
			sm="6">
			<p>First Number: <input type='number' v-model.number="firstNum" @change='answer'></p>
  
		  </v-col>
		  <v-col
			cols="12"
			sm="6">
			
        <p>Second Number: <input type='number' v-model.number="secondNum" @change='answer'></p>
		  </v-col>
		</v-row>
	
		
		<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Result</strong></h1></v-card-title>
  
		<v-divider class="mb-5"></v-divider>
  
		<v-row class="mt-5">
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: #ffb6c1; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Sum: </v-card-title>
			  <v-card-text><strong>{{sum}}</strong></v-card-text>
			</v-card>
		  </v-col>
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: #b6fcd5; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Difference: </v-card-title>
			  <v-card-text><strong>{{difference}}</strong></v-card-text>
			</v-card>
		  </v-col>
  
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: #c6e2ff; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Product: </v-card-title>
			  <v-card-text><strong>{{product}}</strong></v-card-text>
			</v-card>
		  </v-col>
  
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: #ffc3a0; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Quotient: </v-card-title>
			  <v-card-text><strong>{{quotient}}</strong></v-card-text>
			</v-card>
		  </v-col>

		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: #ffc3a0; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Average: </v-card-title>
			  <v-card-text><strong>{{avg}}</strong></v-card-text>
			</v-card>
		  </v-col>
		</v-row>
		</div>
		
	  </v-card>
	
	 </template>
	
	<script>
export default {
    el: '#app',
    computed: {
        answer: function () {
            this.sum = this.firstNum + this.secondNum;
            this.difference = this.firstNum - this.secondNum;
            this.product = this.firstNum * this.secondNum;
            this.quotient = this.firstNum / this.secondNum;
            this.avg = this.sum / 2;
        }
    },
    data() {
        return {
            firstNum: 0,
            secondNum: 0,
            sum: 0,
            diff: 0,
            prod: 0,
            quo: 0,
            avg: 0,
        }
    }
}
	</script>
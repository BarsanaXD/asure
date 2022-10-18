<template>
	<v-card
		 :loading="loading"
		 class="mx-auto my-12"
		 max-width="800"
		 elevation="12"
		 color="white">

		<div style="padding: 10px;">
			<h1>Area Calculator</h1>
		  <v-row style="margin: 5px;">
		  <v-col
			cols="12"
			sm="6">
			<p>Choose what area you want to calculate.</p>
			<p>1. rectangle</p>
			<p>2. square</p>
			<p>3. triangle</p>
			<p>4. circle</p>
			<p>Enter the number here: <input type='number' v-model.number="firstNum" @change='answer'></p>
		  </v-col>
		  <v-col
			cols="12"
			sm="6">
		  </v-col>
		</v-row>
		<v-divider class="mb-5"></v-divider>
  
		<v-row class="mt-5">
		  <v-col
			cols="12"
			sm="6"
			height="200">
			<div v-if="rectangle">
			<p>You chose: Rectangle</p>
			<p>Enter Length: <input type='number' v-model.number="length" @change='answer'></p>
			<p>Enter Width: <input type='number' v-model.number="width" @change='answer'></p>
			<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Solution</strong></h1></v-card-title>
			<p>Area of rectangle is: <strong>{{area}}</strong></p>
			</div>
			<div v-if="square">
				<p>You chose: Square</p>
			<p>Enter side of the square: <input type='number' v-model.number="width" @change='answer'></p>
			<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Solution</strong></h1></v-card-title>
			<p>Area of square is: <strong>{{area}}</strong></p>
			</div>
			<div v-if="triangle">
				<p>You chose: Triangle</p>
			<p>Enter Base: <input type='number' v-model.number="length" @change='answer'></p>
			<p>Enter Height: <input type='number' v-model.number="width" @change='answer'></p>
			<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Solution</strong></h1></v-card-title>
			<p>Area of triangle is: <strong>{{area}}</strong></p>
			</div>
			<div v-if="circle">
				<p>You chose: Circle</p>
			<p>Enter Radius: <input type='number' v-model.number="length" @change='answer'></p>
			<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Solution</strong></h1></v-card-title>
			<p>Area of circle is: <strong>{{area}}</strong></p>
			</div>
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
			if(this.firstNum==1){
				this.rectangle = true;
				this.square= false;
				this.triangle= false;
				this.circle= false;
				this.area = this.width*this.length;
			}else if(this.firstNum==2){
				this.square = true;
				this.rectangle = false;
				this.triangle= false;
				this.circle= false;
				this.area = this.width*this.width;
			}else if(this.firstNum==3){
				this.triangle = true;
				this.rectangle = false;
				this.square= false;
				this.circle= false;
				this.area = (this.length*this.width)/2;
			}else if(this.firstNum==4){
				this.circle = true;
				this.rectangle = false;
				this.square= false;
				this.triangle= false;
				this.area = (this.length*this.length)*Math.PI;
			}else{
				this.rectangle = false;
				this.square= false;
				this.triangle= false;
				this.circle= false;
			
			}
		
            this.difference = this.firstNum - this.secondNum;
            this.product = this.firstNum * this.secondNum;
            this.quotient = this.firstNum / this.secondNum;
            this.avg = this.sum / 2;
        }
    },
    data() {
        return {
			area: null,
			width: null,
			length: null,
			height: null,
			rectangle: false,
			square: false,
			triangle: false,
			circle: false,
            firstNum: null,
            secondNum: null,
     
        }
    }
}
	</script>
<style lang="scss">
	input[type=number], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: #007c72;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


</style>
<template>
	<main id="about-page">
		<h1>About Vuetify</h1>
		<div class="container">
		<div class="row ">
	<div class="col">
	  <div class="card" style="border-radius:50px;">
		  <div class="card-header" style="border-radius:50px; background-color: rgb(82, 190, 252);" >
			  <h1 style="text-align: center; padding: 10px;">What is Vuetify?</h1>
			  
		  </div>
		
		</div>
	</div>
  </div>
		<div class="row">
	<div class="card">
	<img src="" alt="" style="width:100%">
	<div class="container">
	<h4><b>Vuetify is</b></h4> 
	<p>Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.</p> 
	</div>
	</div>
</div>


	
	</div>
	</main>
</template>

<style lang="scss">
	input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
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

<script>
export default {
	el: '#app',
	data() {
		 return {
			  expand: false,
			  vowel: "",
			  vow: 0,
			  count: 0,
			  conso: 0,
			  modifiedString: "",
		 }

	},
	computed: {
		 answer: function () {
			  var vowelList = 'aeiouAEIOU';
			  this.vow = 0;
			  this.count = 0;
			  this.conso = 0;
			  this.modifiedString = "";
			  //Count vowels
			  this.vow = this.vowel.match(/[aeiou]/gi).length
			  
			  //Count Characters in the string
			  this.count = this.vowel.length;

			  //Count consonants
			  this.conso = this.vowel.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

			  //Convert to *
			  for (var x = 0; x < this.vowel.length; x++) {
				   if (vowelList.indexOf(this.vowel[x]) !== -1) {
						this.modifiedString += "*";
				   } else {
						this.modifiedString += this.vowel[x];
				   }
			  }
		 }
	}
}
</script>
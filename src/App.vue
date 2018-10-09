<template>
  	<div id="app">
		  <heading></heading>
		  <results></results>
  	</div>
</template>

<script>
import Heading from "./components/Heading";
import Results from "./components/Results";

export default {
  	name: 'App',
  	components: {
	  	Heading,
	  	Results
	}
}
</script>

<style>
body{
	margin: 0;
	overflow-x: hidden;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	min-height: 100vh;
	width: 100vw;
	background: #1d365c; /* Old browsers */
	background: -moz-linear-gradient(left, #1d365c 1%, #385388 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left, #1d365c 1%,#385388 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right, #1d365c 1%,#385388 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d365c', endColorstr='#385388',GradientType=1 ); /* IE6-9 */
}
</style>

<template>
	<div id="Heading">
		<h2 class="title">Github Repository Search</h2>
		<h4 class="subtitle">Start typing to search for a Github Repository!</h4>
		<div class="searchContainer">
			<input type="text" id="search" placeholder="What repository are you looking for..." v-model="query" @keyup.enter="searchRepositories">
		</div>
	</div>
</template>

<script>

export default {
	name: 'Heading',
	components: {

	},
	props: [

	],
	methods: {
        searchRepositories(){
			var newQuery = false;

			if(this.query === "") return;
			this.$emit("searchRepositories", this.query);
		},
	},
	computed: {

	},
	data(){
		return {
			query: "",
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

	#Heading{
		padding: 0 22%;
		padding-top: 20%;
        font-family: 'Open Sans', sans-serif;
        
		.title{
			text-align: center;
			margin: 0;
			padding: 10px 20px;
			font-family: 'Roboto Condensed', sans-serif;
			font-size: 65px;
		}

		.subtitle{
			text-align: center;
			margin: 0;
			padding: 10px 20px;
		}

		.searchContainer{
			margin-top: 40px;

			#search{
				text-align: center;
				width: 90%;
				height: 50px;
				font-size: 20px;
				color: $regularText;
				border: 5px solid #132c52;
				box-sizing: border-box;
				display: inline-block;
				border-radius: 5px 0px 0px 5px;

				&:focus{
					outline: none;
				}

				&::placeholder{
					opacity: 1;
					color: lightgrey;
					font-size: 16px;
				}
			}
		}
	}
</style>
`
<template>
  	<div id="app">
		<heading
			@searchRepositories="searchForQuery"
			@sortChanged="setSort"
			@orderChanged="setOrder">
		</heading>
		<results 
			:results="repos"
			:loading="loading"
			:totalPages="totalPages"
			:currPage="currentPage"
			@pageChanged="setPage">
		</results>
  	</div>
</template>

<script>
import Heading from "./components/Heading";
import Results from "./components/Results";
import parseLinkHeader from "parse-link-header";

export default {
  	name: 'App',
  	components: {
	  	Heading,
	  	Results
	},
	methods: {
		fetchRepos(url){
			this.loading = true;
			fetch(url)
				.then(stream => {
					var linkHeader = parseLinkHeader(stream.headers.get("Link"));
					if(linkHeader && linkHeader.last){
						this.totalPages = parseInt(linkHeader.last.page);
					}

					return stream.json();
				})
				.then(data => {
					if(data.items){
						this.repos = data.items;
					} 
					this.loading = false;
				})
				.catch(error => console.error(error))
		},
		searchForQuery(query){
			this.searchQuery = query;
			this.fetchRepos(this.completeURL);
		},
		setSort(sort){
			this.searchSort = sort;
			this.fetchRepos(this.completeURL);
		},	
		setOrder(order){
			this.searchOrder = order;
			this.fetchRepos(this.completeURL);
		},
		setPage(page){
			this.currentPage = page;
			this.fetchRepos(this.completeURL);
		}
	},
	computed: {
		completeURL: function(){
			var url = this.baseURL;
			url += `?q=${ this.searchQuery }`

			if(this.searchSort != "" && this.searchSort != "bestmatch") url += `&sort=${ this.searchSort }`;
			if(this.searchOrder != "") url += `&order=${ this.searchOrder }`;

			return url;
		}
	},
	data(){
		return {
			repos: [],
			loading: false,
			searchQuery: "",
			searchSort: "",
			searchOrder: "",
			baseURL: "https://api.github.com/search/repositories",
			currentPage: 1,
			totalPages: 0,
			totalResults: 0
		}
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

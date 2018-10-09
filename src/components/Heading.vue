<template>
	<div id="Heading">
		<h2 class="title">Github Repository Search</h2>
		<h4 class="subtitle">Start typing to search for a Github Repository!</h4>
        <h6 class="message">We even support Github <a href="https://help.github.com/articles/searching-for-repositories/" target="_blank">search qualifiers!</a></h6>
		<div class="searchContainer">
			<input type="text" id="search" placeholder="What repository are you looking for..." v-model="query" @keyup.enter="searchRepositories">
            <span class="searchButton" @click="searchRepositories"><font-awesome-icon icon="search"></font-awesome-icon></span>
		</div>
        <div class="searchOptions">
			<select-dropdown :options="sortOptions" placeholder="Sort By" class="sortDropdown" @optionChanged="setSort"></select-dropdown>
			<select-dropdown :options="orderOptions" placeholder="Order By" class="orderDropdown" @optionChanged="setOrder"></select-dropdown>
		</div>
	</div>
</template>

<script>
import SelectDropdown from "../components/SelectDropdown";

export default {
	name: 'Heading',
	components: {
        SelectDropdown
	},
	props: [

	],
	methods: {
        searchRepositories(){
			var newQuery = false;

			if(this.query === "") return;
			if(this.query != this.previousQuery){
				newQuery = true;
				this.previousQuery = this.query;
			}
			this.$emit("searchRepositories", this.query, newQuery);
        },
        setSort(payload){
			this.$emit("sortChanged", payload.value);
		},
		setOrder(payload){
			this.$emit("orderChanged", payload.value);
		}
	},
	computed: {

	},
	data(){
		return {
            query: "",
            previousQuery: "",
            orderOptions: [
				{ label: "Descending", value: "desc" },
				{ label: "Ascending", value: "asc" },
			],
			sortOptions: [
				{ label: "Best Match", value: "bestmatch" },
				{ label: "Stars", value: "stars" },
				{ label: "Forks", value: "forks" },
				{ label: "Updated", value: "updated" },
			],
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
		
		@include phone{
			padding: 0 5%;
		}
        
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
        
        .message{
			font-size: 14px;
			margin: 0;

			a{
				color: aquamarine;
			}
		}

		.searchContainer{
            margin-top: 40px;
            font-size: 0;

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
            
            .searchButton{
				display: inline-block;
				height: 50px;
				width: 10%;
				background-color: #132c52;
				vertical-align: top;
				position: relative;
				cursor: pointer;
				border-radius: 0px 5px 5px 0px;

				.fa-search{
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					font-size: 20px;
				}
			}
        }
        
        .searchOptions{
			padding: 10px;
			text-align: left;

			.sortDropdown{
				width: 130px;
				vertical-align: top;
				margin-right: 10px;
			}

			.orderDropdown{
				width: 130px;
				vertical-align: top;
			}
		}
	}
</style>
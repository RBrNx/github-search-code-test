<template>
	<div id="Results">
        <div class="flex">
            <repository-result></repository-result>
            <repository-result></repository-result>
        </div>
	</div>
</template>

<script>
import RepositoryResult from "./RepositoryResult";

export default {
	name: 'Results',
	components: {
        RepositoryResult
    },
    props: [
        "results",
    ],
    methods: {

    },
    watch: {

    },
	data(){
		return {
            searchResults: [],
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

	#Results{
        margin-top: 50px;
        padding: 0 15%;
        padding-bottom: 20px;
        font-family: 'Open Sans', sans-serif;
        position: relative;

        .flex{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row wrap;
            align-content: center;
            width: 100%;
        }
	}
</style>
`
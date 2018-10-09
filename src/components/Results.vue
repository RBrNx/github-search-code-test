<template>
	<div id="Results">
        <span>Results go here</span>
	</div>
</template>

<script>

export default {
	name: 'Results',
	components: {

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
	}
</style>
`
<template>
	<div id="Results">
        <bounce-loader :loading="loading" color="#4d84d8"></bounce-loader>
        <transition-group
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @afterLeave="afterLeave">
            <repository-result
                v-for="(repo, index) in searchResults"
                :key="repo.id"
                :repoInformation="repo"
                :data-index="index"
            ></repository-result>
        </transition-group>
	</div>
</template>

<script>
import RepositoryResult from "./RepositoryResult";
import BounceLoader from "vue-spinner/src/BounceLoader";
import { TweenLite } from "gsap";

export default {
	name: 'Results',
	components: {
        RepositoryResult,
        BounceLoader
    },
    props: [
        "results",
        "loading"
    ],
    methods: {
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.left = '50%';

            if(!this.animating) this.animating = true;
        },
        enter(el, done){
            const delay = (el.dataset.index >= 10 ? 10 : el.dataset.index) * 100;

            setTimeout(() => {
                TweenLite.to(el, 0.5, {
                    opacity: 1,
                    left: 0,
                    onComplete: done
                })
            }, delay)
        },
        afterEnter(el){
            if(el.dataset.index == this.results.length -1){ this.animating = false; }
        },
        beforeLeave(){
            if(!this.animating) this.animating = true;
        },
        leave(el, done){
            setTimeout(() => {
                TweenLite.to(el, 0.5, {
                    opacity: 0,
                    left: '-50%',
                    onComplete: done
                })
            }, 0)
        },
        afterLeave(el){
            if(el.dataset.index == this.results.length -1) this.animating = false;
        },
    },
    watch: {
        results: function(results){
            if(this.searchResults.length > 0){
                this.resultsToUpdate = results;
                this.searchResults = [];
            }
            else{
                this.searchResults = results;
                this.showPagination = true;
            }
        },
        animating: function(animating){
            if(!animating && this.resultsToUpdate.length > 0){
                this.searchResults = this.resultsToUpdate;   
                this.resultsToUpdate = [];
            }
        },
    },
	data(){
		return {
            animating: false,
            resultsToUpdate: [],
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

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: row wrap;
            align-content: center;
            width: 100%;
        }

        .v-spinner{
            display: inline-block;
        }
	}
</style>
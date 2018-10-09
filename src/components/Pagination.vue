<template>
    <ul class="paginationContainer">
        <li class="paginationLink">
            <button type="button" 
                class="paginationNav" 
                @click="onClickPreviousPage" 
                :disabled="isFirstPageActive">
                Prev
            </button>
        </li>

        <li class="paginationLink first">
            <button type="button" 
                class="paginationNumeral" 
                @click="onClickFirstPage" 
                :disabled="isFirstPageActive" 
                :class="{ active: isPageActive(1), hidden: totalPages == 0 }">
                1
            </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="paginationLink">
            <button type="button" 
                class="paginationNumeral" 
                @click="onClickPage(page.index)" 
                :disabled="page.isDisabled" 
                :class="{ active: isPageActive(page.index) }">
                {{ page.index }}
            </button>
        </li>

        <li class="paginationLink last">
            <button type="button" 
                class="paginationNumeral"
                @click="onClickLastPage" 
                :disabled="isLastPageActive" 
                :class="{ active: isPageActive(totalPages), hidden: totalPages <= 1 }">
                {{ totalPages }}
            </button>
        </li>

        <li class="paginationLink">
            <button type="button" 
                class="paginationNav" 
                @click="onClickNextPage" 
                :disabled="isLastPageActive">
                Next
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3,
        },
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        }
    },
    computed: {
        startPage(){
            if(this.currentPage < this.maxVisibleButtons) return 2;
            if(this.currentPage > this.totalPages - this.maxVisibleButtons) return this.totalPages - this.maxVisibleButtons;

            return this.currentPage - 1;
        },
        endPage(){
            if(this.currentPage >= this.totalPages - this.maxVisibleButtons) return this.totalPages - 1;

            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        },
        pages(){
            var range = [];

            for(var i = this.startPage; i <= this.endPage; i++){
                range.push({
                    index: i,
                    isDisabled: i === this.currentPage
                })
            }

            return range;
        },
        isFirstPageActive(){
            return this.currentPage == 1;
        },
        isLastPageActive(){
            return this.currentPage == this.totalPages;
        }
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pageChanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pageChanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pageChanged', page);
        },
        onClickNextPage() {
            this.$emit('pageChanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pageChanged', this.totalPages);
        },
        isPageActive(page){
            return this.currentPage == page;
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.paginationContainer {
    list-style-type: none;
    padding: 0;

    .paginationLink{
        display: inline-block;

        &.first:after{
            content: '..';
            display: inline-block;
        }
        &.last:before{
            content: '..';
            display: inline-block;
        }

        .paginationNav{
            background-color: #efefef;
            color: #365084;
            padding: 10px;
            margin: 0 10px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
            border: none;
            border-radius: 5px;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            cursor: pointer;

            &:focus{
                outline: none;
            }

            @include phone{
                margin: 0 5px;
            }
        }

        .paginationNumeral{
            background-color: transparent;
            color: #efefef;
            padding: 10px;
            margin: 0 10px;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            box-sizing: border-box;
            cursor: pointer;

            &.hidden{
                display: none;
            }

            &:focus{
                outline: none;
            }

            &.active{
                background-color: #365084;
                border: 1px solid #efefef;
            }

            @include phone{
                margin: 0 5px;
            }
        }
    }
}
</style>



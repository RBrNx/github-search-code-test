<template>
    <div class="SelectDropdown">
        <multiselect 
            v-model="selectValue" 
            :options="options"
            track-by="value"
            label="label"
            :placeholder="placeholder" 
            :show-labels="false" 
            :allow-empty="false"
            :searchable="false"
            @input="optionChanged">
        </multiselect>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    name: "SelectDropdown",
    components: {
        Multiselect
    },
    props: [
        "options",
        "placeholder",
    ],
    methods: {
        optionChanged(){
            this.$emit("optionChanged", this.selectValue);
        }
    },
    data(){
        return {
            selectValue: this.options[0],
        }
    }
}
</script>

<style lang="scss">
@import "vue-multiselect/dist/vue-multiselect.min.css";

.SelectDropdown{ 
    display: inline-block;

    .multiselect{
        min-height: 30px;
        color: #fff;
    }

    .multiselect__select{
        width: 30px;
        height: 30px;
    }
    .multiselect__tags{
        padding-right: 30px;
        padding-top: 0px;
        min-height: 30px;
        background-color: #365084; 

        .multiselect__single, .multiselect__input{
            line-height: 28px;
            margin-bottom: 0px;
            background-color: #365084; 
        }
    }
    .multiselect__content-wrapper{
        width: auto;
        min-width: 100%;
        background-color: #365084; 
    }

    .multiselect__element{
        margin: 0;

        .multiselect__option--highlight{
            background: darken(#365084, 5%);
        }
    }
}
</style>



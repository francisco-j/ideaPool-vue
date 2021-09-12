<script>
    import { computed, ref } from "vue";

    export default {
        props: {
            id: String,
            content: String,
            votes: Array// String[]
        },
        setup(props, context) {

            return {
            }
        }
    }
</script>

<template>
    this is an option card

    id: {{id}}
    content: {{content}},
    <div v-for="vote in votes" :key="vote">{{vote}}</div>
</template>

<style>
</style>
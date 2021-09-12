<script>
    import { computed, ref } from "vue";
    import IdeaCard from "./IdeaCard.vue";

    export default {
        components: { IdeaCard },
        setup(props, context) {
            const mock = [
                {
                    id: "001",
                    content: "text",
                    votes: ['Juan', 'Ana']
                }
            ]

            const ideas = ref(mock); // TODO: use []

            const addOption = (opt) => {
                ideas.value.concat([...ideas, opt])
            }

            const sortedIdeas = computed(() =>
                ideas.value.sort((optionA, optionB) => 
                    optionA.votes > optionB.votes
                )
            )

            // const removeOption = () => {
            // }

            return {
                sortedIdeas,
                addOption,
                // removeOption,
            }
        }
    }
</script>

<template>
    <div class="new-entry-container">
        <input v-model="userInput"/>
        <button class="user-button" @click="login">agregar</button>
    </div>
    <div class="options-list">
        <IdeaCard v-for="idea in sortedIdeas" :key="idea.id"
            v-bind="idea"
        />
    </div>
</template>

<style>
    .new-entry-container {
        margin-top: 15px;
    }

    .options-list {
        margin-top: 15px;
    }
</style>
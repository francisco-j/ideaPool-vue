<script>
    import { computed, ref } from "vue";
    import IdeaCard from "./IdeaCard.vue";

    export default {
        components: { IdeaCard },
        setup(props, context) {
            const mock = [
                {
                    id: "001",
                    content: "1984 by George Orwell https://www.goodreads.com/book/show/40961427-1984",
                    votes: ['Juan', 'Ana']
                }
            ]

            const ideas = ref(mock); // TODO: use []
            const newEntry = ref('');

            const addOption = () => {
                const newIdea = {
                    id: ideas.value[ideas.value.length-1].id + 1,
                    content: newEntry.value,
                    votes: ['me']
                }
                ideas.value = ideas.value.concat(newIdea)

                newEntry.value = ''
            }

            const sortedIdeas = computed(() =>
                ideas.value.sort((optionA, optionB) => 
                    optionB.votes.length - optionA.votes.length
                )
            )

            return {
                sortedIdeas,
                addOption,
                newEntry,
            }
        }
    }
</script>

<template>
    <div class="new-entry-container">
        <textarea v-model.trim="newEntry"
            class="new-entry-textarea"
            :placeholder="'titulo del libro\npaginas\nprecio\netc..'" 
            rows="5"
        />
        <button class="new-entry-button"
            @click="addOption"
            :disabled="!newEntry.length"
        >
            agregar
        </button>
    </div>
    <div class="ideas-list">
        <IdeaCard v-for="idea in sortedIdeas" :key="idea.id"
            v-bind="idea"
        />
    </div>
</template>

<style>
    .new-entry-container {
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }

    .new-entry-textarea {
        resize: none;
        width: 18rem;
        overflow: auto;
    }

    .new-entry-button {
        margin-left: 6px;
        height: fit-content;
        padding: 3px;
    }

    .ideas-list {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        margin: 15px;
        
    }
    .ideas-list > * {
        margin-top: 8px;
    }
</style>
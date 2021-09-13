<script>
    import { ref, inject } from "vue";

    export default {
        setup(props) {
            const store = inject('store')

            const userInput = ref('');

            const logout = () => {
                store.user = null
            }

            const login = () => {
                store.user = userInput.value
            }

            return {
                store,
                userInput,
                login,
                logout
            }
        }
    }
</script>

<template>
    <div class="header">
        <div class="logo">Idea Pool</div>

        <div v-if="store.user">
            <span>{{store.user}}</span>
            <button class="user-button" @click="logout">logout</button>
        </div>
        <div v-else>
            <input v-model="userInput"/>
            <button class="user-button" @click="login">login</button>
        </div>
    </div>
</template>

<style>
    .header {
        width: 100%;
        padding: 15px;
        border-bottom: 1px rgb(216 215 215) solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        position: sticky;
        top: 0;
    }

    .user-button {
        margin-left: 6px;
    }
</style>
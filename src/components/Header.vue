<script>
    import { ref } from "vue";

    export default {
        setup(props) {
            const userInput = ref('');
            const user = ref();
            const logout = () => {
                user.value = null
            }

            const login = () => {
                user.value = userInput.value
            }

            return {
                user,
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

        <div v-if="user">
            <span>{{user}}</span>
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
    }

    .user-button {
        margin-left: 6px;
    }
</style>
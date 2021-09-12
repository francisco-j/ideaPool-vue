<script>
    import classBuilder from "../js/classBuilder";

    export default {
        props: {
            id: String,
            content: String,
            votes: Array// String[]
        },
        setup(props, context) {
            return {
                b: classBuilder('idea-card')
            }
        }
    }
</script>

<template>
    <div :class="b`container`">
        <span :class="b`content`">{{content}}</span>
        <div :class="b`voters-container`">
            <div :class="b`vote-btn`">
                <span>{{votes.length}}</span>
                <img :class="b`life-saver-icon`" src="red-life-saver.ico" alt="Italian Trulli">
            </div>
            <span :class="b`voter`" v-for="vote in votes" :key="vote">
                {{vote}}.
            </span>
        </div>
    </div>
</template>

<style>
    .idea-card_container {
        border: 1px rgb(216 215 215) solid;
        border-radius: 5px;
    }
    .idea-card_content {
        white-space: pre
    }
    .idea-card_voter {
        font-size: 12px;
        color: rgb(100 100 100);
        margin-right: 5px;
    }
    .idea-card_voters-container {
        display: flex;
        align-items: center;
        padding: 5px 15px;
    }
    .idea-card_vote-btn {
        display: flex;
        align-items: center;
        margin-right: 5px;
        padding: 5px;
        border: 1px rgb(216 215 215) solid;
        border-radius: 40%;
    }
    .idea-card_life-saver-icon {
        margin-left: 2px;
        height: 18px;
    }
</style>
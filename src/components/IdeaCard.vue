<script>
    import classBuilder from "../js/classBuilder";
    import LinkPrevue from './lprv.vue' // from 'link-prevue'
    import { computed, inject } from "vue";

    export default {
        props: {
            id: String,
            content: String,
            votes: Array// String[]
        },
        components: {
            LinkPrevue,
        },
        setup(props, context) {
            const store = inject('store')

            const wssUrl = location.origin.includes('https:')
                ? location.origin.replace('https:', 'wss:')
                : 'ws://localhost:5000'

            const webSocket = new WebSocket(wssUrl);
            webSocket.onerror = function (err) {
                console.log(err);
            }
            webSocket.onmessage = function (event) {
                console.log('webSocket message:', JSON.parse(event.data));
            }

            const link = computed(() => {
                let testUrl = props.content.match(/https?:[^\s]+/)
                return testUrl && testUrl[0];
            })
            // https://www.goodreads.com/book/show/40961427-1984


            const selfVoted = computed(() =>
                props.votes.includes(store.user)
            )

            function handleVote () {
                if (selfVoted.value) {
                    console.log('remove vote for ', props.id)
                    webSocket.send('remove vote for '+props.id)
                }
                else {
                    console.log('voting for ', props.id);
                    webSocket.send('voting for '+props.id)
                }
            }


            return {
                b: classBuilder('idea-card'),
                link,
                selfVoted,
                handleVote,
            }
        }
    }
</script>

<template>
    <div :class="b`container`">
        <div :class="b`grid`">
            <span :class="b`text`">{{content}}</span>
            <div :class="b`right`">
                <LinkPrevue v-if="link" :url="link"/>
            </div>
        </div>

        <div :class="b`voters-container`">
            <button
                :class="[b`vote-btn`, selfVoted?b`vote-btn-active`:'']"
                @click="handleVote"
            >
                <span>{{votes.length}}</span>
                <img :class="b`life-saver-icon`" src="red-life-saver.ico" alt="Italian Trulli">
            </button>
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
        padding: 5px 15px;
    }
    .idea-card_grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .idea-card_text {
        white-space: pre;
        text-align: left;
    }
    .idea-card_voter {
        font-size: 12px;
        color: rgb(100 100 100);
        margin-right: 5px;
    }
    .idea-card_voters-container {
        padding-top: 5px;
        display: flex;
        align-items: center;
    }
    .idea-card_vote-btn {
        display: flex;
        align-items: center;
        margin-right: 5px;
        padding: 5px;
        border: 1px rgb(216 215 215) solid;
        border-radius: 40%;
        background: white;
    }
    .idea-card_vote-btn-active {
        border: 0;
        background: #90d5ff;
    }
    .idea-card_life-saver-icon {
        margin-left: 2px;
        height: 18px;
    }
    .idea-card_right {
        display: flex;
        justify-content: center;
    }
</style>
<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER,
                clicks: types.CLICK_COUNTER
            })
        }
    }
</script>

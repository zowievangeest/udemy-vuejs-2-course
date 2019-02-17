<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFunction()">Reset name</button>
    </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String,
        },
        resetFunction: Function,
        userAge: Number,
    },
    methods: {
        switchName() {
            return this.myName.split("").reverse().join("");
        },
        resetName() {
            this.myName = 'Zowie';
            this.$emit('nameWasReset', this.myName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

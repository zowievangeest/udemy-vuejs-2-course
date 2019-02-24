<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact>Home</router-link>
        <router-link to="/user/1" tag="li" active-class="active">User 1</router-link>
        <router-link to="/user/2" tag="li" active-class="active">User 2</router-link>
    </ul>
</template>

<style>
    li {
        padding: 12px;
        border-radius: 10%;
        text-align: center;
        cursor: pointer;
    }
    .active {
        background: lightseagreen;
    }
</style>

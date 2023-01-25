<template>
    <div id="app2" class="container-fluid">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <div class="site-info">
            <h3>Form validation example</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/Html5ValidationAPI">Html 5 + ValidationAPI</router-link>
            <router-link class="btn btn-primary" to="/vvalidate">Валидация с помощью директивы v-validate</router-link>
            <router-link class="btn btn-primary" to="/vvalidate2">v-validate v2</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
    export default {name: "app"};
</script>

<style>
    .site-info {
        color: blue;
        margin-bottom: 20px;
    }

    .btn-primary {
        margin-right: 5px;
    }

    .container-fluid {
        text-align: center;
    }
</style>

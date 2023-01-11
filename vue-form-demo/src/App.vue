<template>
    <div id="app2" class="container-fluid">
        <img alt="Vue logo" src="./assets/logo.png">
        <div class="site-info">
            <h3>Router example</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/helloWorld">helloWorld</router-link>
            <router-link class="btn btn-primary" to="/demoform">demoform</router-link>
            <router-link class="btn btn-primary" to="/demoform2">demoform2</router-link>
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

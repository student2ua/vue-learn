<template>
    <div class="weather" :class="weatherClass">
        <div class="container">
            <div class="card weather-form">
                <input type="text" class="weather-form__input" v-model="searchQuery" @keyup.enter="weatherSearch"
                       placeholder="Enter city ...Kyiv,NewYork,Berlin">
                <button class="weather-form__btn" @click="weatherSearch">Search</button>
            </div>
            <div class="card weather-load" v-if="loading">...</div>
            <div class="weather-info" v-show="!error && location /*&& temperature!==0*/ && description">
                <div class="weather-info__text">
                    <p class="card">{{ location}}</p>
                    <p class="card">{{temperature}} °C</p>
                    <p class="card">{{description}}</p>
                </div>
            </div>
        </div>
        <div class="weather-bg">
            <div>
                <img class="weather-bg__img bg" src="./assets/bg.jpg" alt="App backGround">
                <img class="weather-bg__img overcast" src="./assets/overcast.jpg" alt="App backGround">
                <img class="weather-bg__img partly-cloudly" src="./assets/partly-cloudy.jpg" alt="Partly Cloudy">
                <img class="weather-bg__img sunny" src="./assets/sunny.jpg" alt="Sunny">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                location: '',
                temperature: 0,
                description: '',
                searchQuery: '',
                loading: false,
                error: false,
            };
        },
        computed: {
            weatherClass() {
                if (this.description.includes('Sunny')) {
                    return 'sunny'
                } else if (this.description.includes('Overcast')) {
                    return 'overcast'
                } else if (this.description.includes('Partly cloudy')) {
                    return 'partly-cloudy';
                } else {
                    return '';
                }
            }
        },
        methods: {                                                                                                
            weatherSearch() {
                this.loading = true;
                this.error = false;
                fetch(`https://api.weatherapi.com/v1/current.json?key=69ed7b91ab4b4d4f9f282327242604&q=${this.searchQuery}`)
                    .then(response => response.json())
                    .then(data => {
                        this.loading = false;
                        this.location = data.location.name;
                        this.temperature = data.current.temp_c;
                        this.description = data.current.condition.text;
                        this.resetSearchQuery();
                    }).catch(error => {
                    this.loading = false;
                    this.error = true;
                    console.error(error);
                });
            },
            resetSearchQuery() {
                this.searchQuery = '';
            }
        }
    };
</script>
# vue-form-demo
[github](https://github.com/vaiden/vue-form-example)

[A complete guide to forms in Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-2/)
- [vue 2 (2.6.11)](https://vuejs.org/)
- vee-validate : "2.2.15"
  - [GitHub](https://github.com/logaretm/vee-validate/tree/2.2.15) 
  - [guide](https://vee-validate.logaretm.com/v2/) 
  - [Валидация форм во Vue.js](https://habr.com/ru/post/444900/)
- Bulma

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

`npm install vue-router --save`
 
### vee-validate
`npm i vee-validate@next --save`   // for 3.x

`npm install vee-validate --save` //for 2.x  

`npm i vee-validate` ???

       
### Bulma

[How to Use Bulma And VueJS Together](https://hackernoon.com/how-to-use-bulma-and-vuejs-together-z0103ucp)
[Integrating Dart/Node Sass in Vuejs](https://dev.to/helleworld_/integrating-dart-node-sass-in-vuejs-4o39)
- `npm install --save-dev node-sass sass-loader`
- `npm install bulma`

or `import './../node_modules/bulma/css/bulma.css';`

 <title><%= htmlWebpackPlugin.options.title %></title>
 
 ### CSRF
 [SoF](https://stackoverflow.com/questions/45523101/how-to-refer-laravel-csrf-field-inside-a-vue-template)
 If you're using axios with Vue2 for your ajax requests you can just add the following (usually in your bootstrap.js file):
 
 `<meta name="csrf-token" content="{{ csrf_token() }}">`
 
 ``` 
 window.axios.defaults.headers.common = {
     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
     'X-Requested-With': 'XMLHttpRequest'
 }; 
 ```  
 or
```
axios.get('/api/getcsrftoken').then((response) => {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
}, (err) => {
  console.log(err)
})
  ```

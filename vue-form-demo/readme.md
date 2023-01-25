# vue-form-demo
[github](https://github.com/vaiden/vue-form-example)

[A complete guide to forms in Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-2/)
- [vue 2 (2.6.11)](https://vuejs.org/)
- vee-validate : "2.2.15"       
  - [GitHub](https://github.com/logaretm/vee-validate/tree/2.2.15) 
  - [guide](https://vee-validate.logaretm.com/v2/) 
  - [Валидация форм во Vue.js](https://habr.com/ru/post/444900/)
- [Bulma](https://bulma.io/)  the modern CSS framework that just works.

## Instal
### vue-router
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
 

## info
### HTML 5 + Validation API 
- Браузеры показывают только одну ошибку за один раз. Пользователю придется пытаться отправить форму несколько раз, чтобы увидеть все свои ошибки.
- Ошибки отображаются пользователю только после попытки отправки формы. Для изменения этого поведения придется написать еще тонну кода: вызывать у каждого элемента по событию **blur** функцию **_reportValidity()_**.
- Для стилизации полей ввода существуют только псевдоклассы **:valid** и **:invalid**, нет возможности поймать состояние, когда данные в поле ввода неверны, но пользователь еще не взаимодействовал с ним.
- Каждый браузер отображает ошибки валидации по-своему, они могут выглядеть некрасиво в вашем дизайне.
- Validation API во Vue.js неудобно использовать: приходится сохранять элементы в $refs.

### vee-validate

У vee-validate есть два подхода к валидациям: с помощью директивы и с помощью компонентов.

#### Валидация с помощью директивы v-validate
- ../components/V_validate.vue
- ../components/V_validate2.vue
#### Валидация с помощью компонентов
- https://www.section.io/engineering-education/form-validation-in-vue.js-using-veevalidate/
### Vuelidate


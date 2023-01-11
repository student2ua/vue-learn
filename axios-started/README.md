# axios-started

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


- [How to make HTTP requests with Axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
- [Axios-docs UA](https://axios-http.com/uk/docs/)
- [axios-interceptors-and-asynchronous-login](https://stackoverflow.com/questions/35900230/axios-interceptors-and-asynchronous-login)
- [interceptors](https://masteringjs.io/tutorials/axios/interceptors)
- [how-can-you-use-axios-interceptors](https://stackoverflow.com/questions/52737078/how-can-you-use-axios-interceptors)
### API example 
[see Принцип замещения Лискова (LSP)](https://itnext.io/https-medium-com-manuustenko-how-to-avoid-solid-principles-violations-in-vue-js-application-1121a0df6197)

Вот пример добавления в проект vue
```
import axios from 'axios'

export function jwtInterceptor () {
  axios.interceptors.request.use(request => {
    
    const token = window.localStorage.getItem('token')
  
    if (token && token !== null) {
      request.headers.common.Authorization = `Bearer ${token}`
    }

    return request
  })
}   
```
[Firebase](https://firebase.google.com/docs/web/setup) for [VueJS](https://vuejs.org/) -- email-auth plugin.
For Use with [VueFire](https://github.com/nigeltiany/vuefire) integration

## Install

```bash
npm install @vuefire/vuefire --save
npm install @vuefire/email-auth --save
```

## Usage
#### Configuration
```js
import VueFire from '@vuefire/vuefire'
import VueFire_Email_Auth from '@vuefire/email-auth'

Vue.use(VueFire, {
    project: {
        apiKey: "<API_KEY>",
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
        storageBucket: "<BUCKET>.appspot.com",
        messagingSenderId: "<SENDER_ID>",
        projectId: '<PROJECT_ID>',
    },
    mixins: [VueFire_Email_Auth]
})

// in components
this.$firebase.emailSignIn('<USER_EMAIL>', '<USER_PASSWORD>').then(
    (user) => {
    },
    (error) => {
    }	
);
// Or
this.$firebase.emailSignIn('<USER_EMAIL>', '<USER_PASSWORD>',{ mutate: "vuexMutation" }).catch((error) => {
    
});
// Or a namespaced mutation : <NAMESPACE>/mutationName
this.$firebase.emailSignIn('<USER_EMAIL>', '<USER_PASSWORD>',{ mutate: "authentication/vuexMutation" }).catch((error) => {
    
});
// Or
this.$firebase.emailSignIn('<USER_EMAIL>', '<USER_PASSWORD>', function(error, user) {
    
})

//Signing user up
this.$firebase.emailSignUp('<USER_EMAIL>', '<USER_PASSWORD>').then(
    (user) => {
    },
    (error) => {
    }	
);
// Or
this.$firebase.emailSignUp('<USER_EMAIL>', '<USER_PASSWORD>',{ mutate: "vuexMutation" }).catch((error) => {
    
});
// Or
this.$firebase.emailSignUp('<USER_EMAIL>', '<USER_PASSWORD>', function(error, user) {
    
})
```

See [VueFire](https://github.com/nigeltiany/vuefire) Package Documentation on how to use mixins

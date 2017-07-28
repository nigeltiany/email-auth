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

### Vuex Usage

```js
Vue.use(VueFire, {
    project: {
        apiKey: "<API_KEY>",
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
        storageBucket: "<BUCKET>.appspot.com",
        messagingSenderId: "<SENDER_ID>",
        projectId: '<PROJECT_ID>',
    },
    mixins: [{
        vuex: true,
        sources: [VueFire_Email_Auth]
    }]
})

// In components
export default {
    data () {
      return {
        user: {
          email: null,
          password: null,
          // Mutation to commit when/if login/signup is successful
          mutate: 'authentication/authenticatedUser',
          // Firebase path to save user. Defaults to 'users/'
          firebasePath: 'users/',
          // Function to call on validation error
          error: this.error
        }
      }
    },
    methods: {
      ...mapActions('authentication', [
        'emailSignUp',
        'emailSignIn'
      ]),
      error (error) {
        // console.log(error)
        // Or show toast message
      }
    }
}

// Vuex example
export default {

  namespaced: true,

  state: {
    user: JSON.parse(localStorage.getItem('user')) || {}
  },

  getters: {
    authUser (state) {
      return state.user
    }
  },

  mutations: {
    authenticatedUser (state, authenticatedUser) {
      Object.assign(state.user, authenticatedUser)
      router.push({ path: '/' })
      localStorage.setItem('user', JSON.stringify(authenticatedUser))
    }
  }
}
```

See [VueFire](https://github.com/nigeltiany/vuefire) Package Documentation on how to use mixins

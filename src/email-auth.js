export default class EmailAuth {
  emailSignIn ({ firebase, _mutations }, email, password, action) {
    if (typeof action === "function") {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        action(null, firebase.auth().currentUser)
      ).catch(action(error))
    }
    else if (typeof action === "object" && action.mutate) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          try {
              _mutations[action.mutation][0](firebase.auth().currentUser)
          }catch (e) {
            let namespace = action.split('/')[0]
            let mutation = action.split('/')[1] || action.mutate
            throw new Error('No mutation named ' + mutation + 'in the ' + ((action.split('/')[1]) ? namespace : 'global') + ' vuex namespace')
          }
        }).catch((error) => {
          return Promise.reject(error)
        })
    }
    else {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    }
  }

  emailSignUp ({ firebase, _mutations }, email, password, action) {
    if (typeof action === "function") {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        action(null, firebase.auth().currentUser)
      ).catch(action(error))
    }
    else if (typeof action === "object" && action.mutate) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
      () => {
        try {
          _mutations[action.mutation][0](firebase.auth().currentUser)
        }catch (e) {
          let namespace = action.split('/')[0]
          let mutation = action.split('/')[1] || action.mutate
          throw new Error('No mutation named ' + mutation + 'in the ' + ((action.split('/')[1]) ? namespace : 'global') + ' vuex namespace')
        }
      }).catch((error) => {
        return Promise.reject(error)
      })
    }
    else {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
  }
}

export default class EmailAuth {
  emailSignIn ({ firebase, database, _mutations }, user, password, action) {
    if (typeof action === "function") {
      firebase.auth().signInWithEmailAndPassword(user, password).then(
        action(null, firebase.auth().currentUser)
      ).catch(action(error))
    }
    else if (typeof action === "object") {
      firebase.auth().signInWithEmailAndPassword(user, password).then(
        () => {
          if (action.mutate) {
            EmailAuth.invokeMutation(firebase, action.mutate)
          }
        }).catch((error) => {
          return Promise.reject(error)
      })
    }
    else {
      // For Vuex
      if (typeof user === "object") {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
          () => {
            if (user.mutate) {
              EmailAuth.invokeMutation(firebase, _mutations, user.mutate)
            }
          }).catch((error) => {
            if (!user.error || typeof user.error !== 'function') {
              return Promise.reject(error)
            }
            user.error(error)
        })
      }
      else {
        return new Promise((resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(user, password).then(
            resolve(firebase.auth().currentUser)
          ).catch((error) => {
            reject(error)
          })
        })
      }
    }
  }

  emailSignUp ({ firebase, database, _mutations }, user, password, action) {

    if (typeof action === "function") {
      firebase.auth().createUserWithEmailAndPassword(user, password).then(
        action(null, firebase.auth().currentUser)
      ).catch(action(error))
    }
    else if (typeof action === "object") {
      firebase.auth().createUserWithEmailAndPassword(user, password).then(
        () => {
          if (action.mutate) {
            EmailAuth.invokeMutation(firebase, action.mutate)
          }
        }).catch((error) => {
          return Promise.reject(error)
      })
    }
    else {
      // For Vuex
      if (typeof user === "object") {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
          () => {
            if (user.mutate) {
              EmailAuth.invokeMutation(firebase, _mutations, user.mutate)
            }
            EmailAuth.saveUser(user.firebasePath, user, firebase.auth().currentUser, database)
          }).catch((error) => {
            if (!user.error || typeof user.error !== 'function') {
              return Promise.reject(error)
            }
            user.error(error)
        })
      }
      else {
        return new Promise((resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(user, password).then(
            resolve(firebase.auth().currentUser)
          ).catch((error) => {
            reject(error)
          })
        })
      }
    }
  }

  static invokeMutation (firebase, _mutations, mutation) {
    _mutations[mutation][0](firebase.auth().currentUser)
    // try {
    //   _mutations[mutation][0](firebase.auth().currentUser)
    // }catch (e) {
    //   console.log(mutation)
    //   let namespace = mutation.split('/')[0]
    //   let mutation = mutation.split('/')[1] || mutation
    //   throw new Error('No mutation named ' + mutation + 'in the ' + ((mutation.split('/')[1]) ? namespace : 'global') + ' vuex namespace')
    // }
  }

  static saveUser (path='users/', formData, user, database) {
    delete formData.password
    delete formData.error
    delete formData.firebasePath
    database().ref(path+user.uid).set(Object.assign(formData, {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnoymous: user.isAnonymous,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerData: user.providerData,
      providerId: user.providerId,
      refreshToken: user.refreshToken,
      uid: user.uid
    }))
  }
}

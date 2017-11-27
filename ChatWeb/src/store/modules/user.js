const mutationTypes = {
  SET_USER: `SET_USER`,
  SET_ROOM: `SET_ROOM`,
  SET_ROOM_MESSAGES: `SET_ROOM_MESSAGES`,
  ALL_USER: `ALL_USER`,
  GET_MESSAGES: 'GET_MESSAGES',
  SET_LOADING_ROOM: `SET_LOADING_ROOM`,
  CLEAR_USER: `CLEAR_USER`,
  REGISTER_SUCCESS: `REGISTER_SUCCESS`
}

const state = {
  user: null,
  roomsMap: {}, // {r1: room1, r2: room2}
  roomMessagesMap: {}, // {r1: message_array}
  roomMessageLoadingMap: {}, // {r1: bool}
  allUser: [],
  registerSuccess: false
}

const getters = {
  user: state => state.user,
  roomMessagesMap: state => state.roomMessagesMap,
  roomsMap: state => state.roomsMap,
  allUser: state => state.allUser,
  roomMessageLoadingMap: state => state.roomMessageLoadingMap,
  registerSuccess: state => state.registerSuccess
}

const getMessage = ({state, commit}, {db, roomID}) => {
  const messageCollection = db.ref(`Messages/${roomID}`)

  if (state.roomMessagesMap[roomID]) {
    return
  }

  commit(mutationTypes.SET_LOADING_ROOM, {roomID, isLoading: true})

  messageCollection.on('value', snapshot => {
    const messages = []

    snapshot.forEach(function (messageSnap) {
      messages.push({
        ...messageSnap.val(),
        id: messageSnap.key
      })
    })
    commit(mutationTypes.SET_ROOM_MESSAGES, {roomID, messages})
    commit(mutationTypes.SET_LOADING_ROOM, {roomID, isLoading: false})
  })
}

// const doSomething = (handler) => {
//   setTimeout(() => handler(10), 5000)
// }

// doSomething(val => console.log(val))
// console.log(5)

const findRooms = ({commit, db, userDoc}) => {
  const roomsCollection = db.ref('Conversations')
  for (let userID in userDoc.conversation) {
    const roomID = userDoc.conversation[userID]
    roomsCollection.child(`${roomID}`).on('value', snapshot => {
      const room = {
        ...snapshot.val(),
        key: snapshot.key,
        roomMessages: []
      }
      commit(mutationTypes.SET_ROOM, {roomID, room})
    })
  }
}

// const onUserUpdate = ({commit, db, userKey}) => {
//   db.collection('users').doc(userKey).onSnapshot(doc => {
//     const updateUser = doc.data()
//     commit(mutationTypes.SET_USER, updateUser)
//   })
// }

const setUp = ({commit}, {db, fb}) => {
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      // Check user in [Users node]
      const allUserRef = db.ref('Users')
      const result = []
      allUserRef.on('value', snapshot => {
        snapshot.forEach(childSnap => {
          const dataItem = {
            ...childSnap.val(),
            key: childSnap.key
          }
          result.push(dataItem)
          // get user login
          db.ref(`Users/${childSnap.key}`).on('value', snap => {
            if (snap.val().email === user.email) {
              const userDoc = {
                ...childSnap.val(),
                key: childSnap.key
              }
              commit(mutationTypes.SET_USER, userDoc)
              findRooms({commit, db, userDoc})
            }
          })
        })
        // get all user
        commit(mutationTypes.ALL_USER, result)
      })
    } else {
      // alert('not sign in')
    }
  })
}

const actions = {
  setUp,
  getMessage,
  sendMessage ({commit}, {roomID, db, mess, user_id, type}) {
    const messInfo = {
      content: mess,
      imgHeight: 0,
      imgName: '',
      imgWidth: 0,
      time: new Date().getTime(),
      type: type,
      user_id: user_id
    }
    const newKey = db.ref(`Messages/${roomID}`).push().key
    const updates = messInfo
    db.ref(`Messages/${roomID}/${newKey}`).update(updates)
    db.ref(`Conversations/${roomID}`).update({
      lastMessage: mess
    })
  },
  setUserLoggedIn ({commit}, user) {
    commit(mutationTypes.SET_USER, user)
  },
  getAllUser ({commit}, {db, fb}) {
    const UsersRef = db.ref('Users')
    const result = []
    UsersRef.on('value', snapshot => {
      snapshot.forEach(childSnap => {
        const dataItem = {
          ...childSnap.val(),
          key: childSnap.key
        }
        result.push(dataItem)
      })
    })
    commit(mutationTypes.ALL_USER, result)
  },
  login ({commit}, {fb, email, password}) {
    fb.auth().signInWithEmailAndPassword(email, password).catch(err => {
      console.error('Loii', err)
    })
  },
  register ({commit, dispatch}, {fb, db, email, password, username, displayName}) {
    fb.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
      const newUser = {
        id: user.uid,
        avatar: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        created_at: fb.database.ServerValue.TIMESTAMP,
        login_at: fb.database.ServerValue.TIMESTAMP,
        isOnline: true,
        provider: 'Firebase',
        status: ''
      }

      db.ref(`Users/${user.uid}`).set(newUser)
      // dispatch('createDocOfUser', {db, email, username})
    })
    .catch(err => {
      console.error('Loii', err)
    })
  },
  clearUserWhenSignOut ({commit}, data) {
    commit(mutationTypes.CLEAR_USER, data)
  },
  setUserOnline ({commit}, {db, userID, onlineState}) {
    db.ref(`Users/${userID}`).update({
      isOnline: onlineState
    })
  },
  changUserRegisterState ({commit}, state) {
    commit(mutationTypes.REGISTER_SUCCESS, false)
  }
}

const mutations = {
  [mutationTypes.SET_USER] (state, user) {
    state.user = {...state.user, ...user}
  },

  [mutationTypes.SET_ROOM] (state, {roomID, room}) {
    state.roomsMap = {...state.roomsMap, [roomID]: room}
  },
  [mutationTypes.ALL_USER] (state, allUser) {
    state.allUser = allUser
  },
  [mutationTypes.SET_ROOM_MESSAGES] (state, {roomID, messages}) {
    state.roomMessagesMap = {...state.roomMessagesMap, [roomID]: messages}
  },
  [mutationTypes.SET_LOADING_ROOM] (state, {roomID, isLoading}) {
    state.roomMessageLoadingMap = {...state.roomMessageLoadingMap, [roomID]: isLoading}
  },
  [mutationTypes.CLEAR_USER] (state, data) {
    state.user = data
  },
  [mutationTypes.REGISTER_SUCCESS] (state, data) {
    state.registerSuccess = data
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

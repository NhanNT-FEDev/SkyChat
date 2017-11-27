const types = {
  ALL_USER: 'ALL_USER',
  USER_SELECTED: 'USER_SELECTED'
}

const state = {
  users: [],
  userSelected: {}
}

const getters = {
  users: state => state.users,
  userSelected: state => state.userSelected
}

const mutations = {
  [types.ALL_USER] (state, data) {
    state.users = data
  },
  [types.USER_SELECTED] (state, data) {
    state.userSelected = data
  }
}

const actions = {
  // getAllUser ({ commit }, allUser) {
  //   fetch(`http://api.canavi.vn/v1/peoples`).then(res => {
  //     if (res.status === 200) {
  //       res.json().then(data => {
  //         commit(types.ALL_USER, data.items)
  //       })
  //     }
  //   })
  // },
  getUserSelected ({commit}, userSelected) {
    commit(types.USER_SELECTED, userSelected)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

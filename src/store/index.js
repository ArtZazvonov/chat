/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'passport'
import {Strategy, ExtractJWT} from 'passport'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {
      login: 'user-1',
      password: '12345',
      loggedIn: false
    }
  },
  getters: {
    USER: state => state.user,
  },
  mutations: {
  },
  actions: {
    async LOGIN(context, formData) {
      console.log(formData);
      // const token = jwt.sign(formData, 'shhhhh')
      // console.log(token);
    }
  },
  modules: {
  }
})

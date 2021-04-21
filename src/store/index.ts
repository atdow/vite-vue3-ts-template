/*
 * @Author: atdow
 * @Date: 2021-04-21 16:49:05
 * @LastEditors: null
 * @LastEditTime: 2021-04-21 16:49:13
 * @Description: file content
 */
import { createStore } from "vuex";

const defaultState = {
  count: 0,
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    },
  },
});

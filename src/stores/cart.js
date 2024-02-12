import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    cart: [],
    auth: null,
    params: null,
    token: null,
  },
  mutations: {
    increment(state, payload) {
      state.cart.push(payload);
    },
    pop(state, payload) {
      state.cart.splice(
        state.cart.findIndex((a) => a.id === payload),
        1
      );
    },
  },
});

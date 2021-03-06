import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItemCount: 0,
    cartItems: [],
    cartQuantity: [],
    products: [],
    categories: [],
    username: 0,
    total: 0,
    categoryId: 1,
    pagination: 0,
    pages: 0,
    perPage: 4,
    currentPage: 1,
    payment: 0,
    sliders: []
  },
  getters: {
    doneTodos: state => {
      return this.state.todos.filter(todo => todo.done);
    }
  },
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(i => i._id === item._id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex(el => el._id === item._id);
          state.cartQuantity[itemIndex] += 1;
        } else {
          state.cartItems.push(item);
          state.cartQuantity[state.cartItems.length - 1] = 1;
          state.cartItemCount++;
        }
      } else {
        state.cartQuantity[0] = 1;
        state.cartItems.push(item);
        state.cartItemCount++;
      }
    },
    removeItem(state, payload) {
      let itemIndex = state.cartItems.findIndex(el => el._id === payload);
      state.cartItems.filter(el => el._id !== payload);
      state.cartItemCount--;
      state.cartQuantity.splice(itemIndex, 1);
      state.cartItems.splice(itemIndex, 1);
    },
    increaseItem(state, payload) {
      state.cartQuantity[payload]++;
      state.cartQuantity.push(payload);
    },
    decreaseItem(state, payload) {
      if (state.cartQuantity[payload] > 1) {
        state.cartQuantity[payload]--;
        state.cartQuantity.push(payload);
      }
    },
    getTotal(state) {
      for (let i = 0; i < state.cartItems.length; i++) {
        for (let j = 0; j < state.cartQuantity.length; j++) {
          if (i === j) {
            state.total +=
              state.cartItems[i].discountPrice * state.cartQuantity[i];
          }
        }
      }
      console.log(state.total);
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    decreaseItem: (context, payload) => {
      context.commit("decreaseItem", payload);
    },
    increaseItem: (context, payload) => {
      context.commit("increaseItem", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
    getTotal: context => {
      context.commit("getTotal");
    },
    // getSliders() {
    //   axios.get("https://elnic-api.herokuapp.com/api/sliders").then(res => {
    //     this.state.sliders = res.data;
    //     // console.log(this.sliders);
    //   });
    // }
  }
});

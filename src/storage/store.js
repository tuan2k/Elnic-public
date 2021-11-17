import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [{id:1, name: "Shopping at 7"}],
        cartItemCount: 0,
        cartItems: []
    },
    getters: {
        doneTodos: state => {
            return this.state.todos.filter(todo=>todo.done)
        }
    },
    mutations: {
        addToCart(state,payload) {
            let item = payload;
            item = { ...item, quantity: 1 }
            // if ( state.cartItems.length > 0) {
            //     let bool = state.cartItems.some( i => i.id === item.id)
            //     if (bool) {
            //         let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
            //         state.cartItems[itemIndex]["quantity"] += 1;
            //     } else {
            //         state.cartItems.push(item)
            //     }
            // } else {
            //     state.cartItems.push(item)
            // }
            state.cartItems.push(item)
            state.cartItemCount++;
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === payload.id)
                if (bool) {
                    index = state.cartItems.findIndex( el => el.id === item.id)
                    if (state.cartItems[index]["quantity"] !== 0 ) {
                        state.cartItems[index]["quantity"] -=1
                        state.cartItemCount--;
                    } 
                }
            }
        }

    },
    actions: {
        addToCart: (context, payload) => {
            //setTimeout( () => {
                context.commit("addToCart",payload)
           // }, 3000)
           
        }
    }
})

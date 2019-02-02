import {
  ContentService
} from '~/utils/api.service'
import Vue from 'vue'

export const state = () => ({
  items: [],
  newOrder: {
    color: null,
    size: null,
    quantity: 1
  },
  payment: {
    subtotal: 0,
    discount: 0,
    ongkir: 0,
    total: 0
  },
  dataCostumer: {
    name: null,
    handphone: null,
    email: null,
    address: null,
    province: null,
    city: null,
    courier: null,
    paymentMethods: 'Transfer Bank'
  },
  paymentId: null,
  modalPayment: false,
})

export const mutations = {
  SET_NEWORDER(state, payload) {
    state.newOrder = {
      ...state.newOrder,
      [payload.key]: payload.value
    }
  },
  REMOVE_NEWORDER(state) {
    state.newOrder = {
      color: null,
      size: null,
      quantity: 1
    }
  },
  LOAD_CART(state) {
    if (process.browser) {
      const data = JSON.parse(window.localStorage.getItem('cartItems'))
      if (data && data.length > 0) {
        state.items = (data)
      }
    }
  },
  ADD_CART(state, payload) {
    let duplicate = false
    if (state.items.length > 0) {
      state.items.forEach((item) => {
        // semua quantity ssama setiap warna / produk ????
        if (item.name === payload.name && item.color === payload.color && item.size === payload.size) {
          item.quantity = item.quantity + payload.quantity
          duplicate = true
        }
      })
      if (!duplicate) {
        state.items.push(payload)
      }
    } else {
      state.items.push(payload)
    }
    window.localStorage.setItem('cartItems', JSON.stringify(state.items))
  },
  EDIT_CART(state, payload) {
    const data = {
      ...state.items[payload.index],
      [payload.key]: payload.value
    }

    // state.items[payload.index][payload.key] = payload.value;
    Vue.set(state.items, payload.index, data)
    window.localStorage.setItem('cartItems', JSON.stringify(state.items))
  },
  REMOVE_CART(state, payload) {
    state.items = state.items.filter((item, index) => index !== payload)
    window.localStorage.setItem('cartItems', JSON.stringify(state.items))
  },
  EMPTY_CART(state) {
    state.items = []
    window.localStorage.setItem('cartItems', JSON.stringify(state.items))
  },
  SET_PAYMENT(state) {
    let subtotal, totalDiscount, discount
    subtotal = totalDiscount = discount = 0
    const ongkir = 0

    state.items.forEach((item) => {
      subtotal = subtotal + (item.price * item.quantity)
      totalDiscount = totalDiscount + (item.fromDiscount * item.quantity)
    })
    discount = totalDiscount - subtotal
    state.payment = {
      subtotal,
      discount,
      ongkir,
      total: subtotal - discount
    }
  },
  LOAD_COSTUMER(state, payload) {
    if (process.browser) {
      const data = window.localStorage.getItem('dataCostumer')
      state.dataCostumer = JSON.parse(data)
    }
  },
  EDIT_COSTUMER(state, payload) {
    state.dataCostumer = {
      ...state.dataCostumer,
      [payload.key]: payload.value
    }
    window.localStorage.setItem('dataCostumer', JSON.stringify(state.dataCostumer))
  },
  REMOVE_COSTUMER(state) {
    state.dataCostumer = {
      name: null,
      handphone: null,
      email: null,
      address: null,
      province: null,
      city: null,
      courier: null,
      paymentMethods: 'Transfer Bank'
    }
  },
  ADD_PAYMENT_ID(state) {
    const idPayment =
      Math.random()
        .toString(36)
        .substr(2, 5) + '_'
    Vue.set(state, 'paymentId', idPayment)
  },
  REMOVE_PAYMENT_ID(state) {
    state.paymentId = null
  },
  SET_MODAL_PAYMENT(state, payload) {
    state.modalPayment = payload
  }
}

export const actions = {
  ADD_ORDER({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      if (state.newOrder.size === null || state.newOrder.color === null) {
        reject(new Error('data not complete'))
      } else {
        commit('ADD_CART', payload)
        commit('SET_PAYMENT')
        commit('REMOVE_NEWORDER')
        resolve('Success')
      }
    })
  },
  EDIT_ORDER({ commit }, payload) {
    commit('EDIT_CART', payload)
    commit('SET_PAYMENT')
  },
  REMOVE_ORDER({ commit }, payload) {
    commit('REMOVE_CART', payload)
    commit('SET_PAYMENT')
  },
  LOAD_CART({ commit }, payload) {
    commit('LOAD_CART')
    commit('SET_PAYMENT')
  },
  SUBMIT_ORDER({ state, commit }) {
    const costumer = {
      ...state.dataCostumer,
      ...state.payment,
      paymentID: state.paymentId
    }
    const SubmitCostumer = ContentService.post('OrderCostumer', costumer).then(() => {
      state.items.map((v) => {
        const product = {
          paymentID: state.paymentId,
          name: v.name,
          price: v.price,
          fromDiscount: v.fromDiscount,
          color: v.color,
          size: v.size,
          quantity: v.quantity
        }
        ContentService.post('OrderProduk', product)
      })
    })
    Promise.all([SubmitCostumer]).then(() => {
      commit('EMPTY_CART')
      commit('REMOVE_PAYMENT_ID')
      this.$router.push('/konfirmasi-pembayaran')
      commit('SET_MODAL_PAYMENT', true)
    })
      .then(err => console.log(err))
  }

}

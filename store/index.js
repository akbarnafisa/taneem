import Vue from 'vue'

export const state = () => ({
  modalError: false,
})

export const mutations = {
  SET_MODAL_ERROR(state, payload) {
    state.modalError = payload;
  }
}

export const actions = {

}

export const getters = {

}

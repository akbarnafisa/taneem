import {
  ContentService
} from '~/utils/api.service'

export const state = () => ({
  informations: null
})

export const mutations = {
  SET_INFORMATIONS (state, payload) {
    state.informations = payload
  }
}

export const actions = {
  FETCH_DATA ({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('informasi')
        .then((res) => {
          const data = res.data.data.map((v) => {
            return {
              ...v,
            }
          })
          commit('SET_INFORMATIONS', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })

    })
  }
}

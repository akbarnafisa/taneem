import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'

export const state = () => ({
  sliders: null
})

export const mutations = {
  SET_SLIDERS(state, payload) {
    state.sliders = payload
  }
}

export const actions = {
  FETCH_SLIDER({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('slider')
        .then((res) => {
          const data = res.data.data.map((v) => {
            const images = {
              image: v.image,
              image_responsive: v.image_responsive
            };
            const image = extractImage(images)
            return {
              ...v,
              ...image
            }
          })
          commit('SET_SLIDERS', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })

    })
  }
}

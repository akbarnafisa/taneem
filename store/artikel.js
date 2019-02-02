import Vue from 'vue'
import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'

import striptags from 'striptags'

export const state = () => ({
  artikel: null,
  keyList: {},
})

export const mutations = {
  SET_ARTIKEL(state, payload) {
    state.artikel = payload
  },
  SET_KEY_LIST(state, payload) {
    state.keyList = payload
  }
}

export const actions = {
  FETCH_ARTIKEL({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('artikel')
        .then((res) => {
          let kv = {}
          const data = res.data.data.map((v, index) => {
            const images = {
              thumbnail: v.thumbnail
            }
            const nextBlog = Array(3).fill(1)
              .map((v, i) => (i + index + 1) % res.data.data.length)
            const image = extractImage(images)
            const strip = striptags(v.content.slice(0, 200))
            const options = { day: 'numeric', year: 'numeric', month: 'long' }
            const date = new Date(v.createdAt).toLocaleDateString('en-US', options)
            const link = v.title.toLowerCase()
              .replace(/[^\w ]+/g, '')
              .replace(/ +/g, '-')
            kv = {
              ...kv,
              [link]: index
            }
            return {
              ...v,
              ...image,
              link,
              nextBlog,
              date,
              desc: strip
            }
          })
          commit('SET_KEY_LIST', kv)
          commit('SET_ARTIKEL', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const getters = {
  GET_ARTIKEL(state) {
    return (link) => {
      const key = state.keyList[link]
      return state.artikel[key]
    }
  }
}

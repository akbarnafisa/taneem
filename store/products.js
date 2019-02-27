import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'
import striptags from 'striptags'

export const state = () => ({
  allProducts: null,
  keyList: {},
  category: {},

  //should remove category with - (dash) for links
  listCategory: null,
  sort: [
    'Termurah',
    'Termahal',
    'Terbaru'
  ],
  sortSelected: 'Terbaru'
})

export const mutations = {
  SET_SORT (state, payload) {
    state.sortSelected = payload;
  },
  SET_ALLPRODUCTS (state, payload) {
    state.allProducts = payload;
  },
  SET_ALLCOLLECTIONS (state, payload) {
    state.category = payload;
  },
  SET_KEY_LIST (state, payload) {
    state.keyList = payload
  },
  SET_CATEGORY (state, payload) {
    state.listCategory = payload
  }
}

export const actions = {
  FETCH_PRODUCT ({ state, commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('produk')
        .then((res) => {
          let kv = {}
          let collections = {}
          const data = res.data.data.map((v, index) => {
            const images = {
              images: v.images
            }
            const nextData = Array(8).fill(1)
              .map((v, i) => (i + index + 1) % res.data.data.length)
            const image = extractImage(images)
            const colors = v.colors.split(',')
            const sizes = v.sizes.split(',')
            const strip = striptags(v.desc.slice(0, 200))
            const link = v.name.toLowerCase()
              .replace(/[^\w ]+/g, '')
              .replace(/ +/g, '-')

            kv = {
              ...kv,
              [link]: index
            }


            const result = {
              ...v,
              ...image,
              image: image.images[0],
              link,
              nextData,
              colors,
              sizes,
              descData: strip
            }

            Object.keys(state.listCategory).forEach(key => {
              if (v.category && state.listCategory[key] === v.category) {
                collections = {
                  ...collections,
                  [key]: collections[key] ? [...collections[key], result] : [result]
                }
              }
            })
            return result
          })
          commit('SET_ALLCOLLECTIONS', collections)
          commit('SET_KEY_LIST', kv)
          commit('SET_ALLPRODUCTS', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  FETCH_CATEGORY ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      ContentService.get('category')
        .then((res) => {
          let category = {}
          res.data.data.forEach((v) => {
            category = {
              ...category,
              [v.title.replace(/ +/g, '-').toLowerCase()]: v._id
            }
          })

          commit('SET_CATEGORY', category);
          const fetchProduct = dispatch('FETCH_PRODUCT');
          resolve(fetchProduct)
        })
        .then(err => reject(err))
    })
  }
}

export const getters = {
  GET_PRODUCT (state) {
    return (link) => {
      const key = state.keyList[link]
      return state.allProducts[key]
    }
  }
}


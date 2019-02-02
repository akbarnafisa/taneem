import {
  ContentService
} from '~/utils/api.service'
import extractImage from '~/utils/extractImage'
import striptags from 'striptags'

export const state = () => ({
  allProducts: null,
  keyList: {},
  category: {
    'produk-pilihan': [{

      id: '1233sdasdas3',
      image: '/images/produk4.jpg',
      link: '/',
      name: '18117',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sasdd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18118',
      price: 100000,
      new: true,
      fromDiscount: 0
    },
    {
      id: '123335123',
      image: '/images/produk3.jpg',
      link: '/',
      name: '18113',
      price: 130000,
      fromDiscount: 0
    },
    {
      id: '1233sdas3',
      image: '/images/produk1.jpg',
      link: '/',
      name: '18114',
      price: 120000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18115',
      price: 100000,
      new: true,
      fromDiscount: 130000
    },
    {
      id: '1233sd35123',
      image: '/images/produk5.jpg',
      link: '/',
      name: '18116',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '1233sdasdas3',
      image: '/images/produk4.jpg',
      link: '/',
      name: '18117',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sasdd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18118',
      price: 100000,
      new: true,
      fromDiscount: 0
    }
    ],
    'best-seller': [{
      id: '1233sdasdas3',
      image: '/images/produk4.jpg',
      link: '/',
      name: '18117',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sasdd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18118',
      price: 100000,
      new: true,
      fromDiscount: 0
    },
    {
      id: '123335123',
      image: '/images/produk3.jpg',
      link: '/',
      name: '18113',
      price: 130000,
      fromDiscount: 0
    },
    {
      id: '1233sdas3',
      image: '/images/produk1.jpg',
      link: '/',
      name: '18114',
      price: 120000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18115',
      price: 100000,
      new: true,
      fromDiscount: 130000
    },
    {
      id: '1233sd35123',
      image: '/images/produk5.jpg',
      link: '/',
      name: '18116',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '1233sdasdas3',
      image: '/images/produk4.jpg',
      link: '/',
      name: '18117',
      price: 110000,
      fromDiscount: 130000
    },
    {
      id: '123asd3sasdd3zxczxc',
      image: '/images/produk2.jpg',
      link: '/',
      name: '18118',
      price: 100000,
      new: true,
      fromDiscount: 0
    }
    ]
  },

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
  SET_SORT(state, payload) {
    state.sortSelected = payload;
  },
  SET_ALLPRODUCTS(state, payload) {
    state.allProducts = payload;
  },
  SET_KEY_LIST(state, payload) {
    state.keyList = payload
  },
  SET_CATEGORY(state, payload) {
    state.listCategory = payload
  }
}

export const actions = {
  FETCH_PRODUCT({ commit }) {
    return new Promise((resolve, reject) => {
      ContentService.get('produk')
        .then((res) => {
          let kv = {}
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
            return {
              ...v,
              ...image,
              image: image.images[0],
              link,
              nextData,
              colors,
              sizes,
              // date,
              descData: strip
            }
          })
          commit('SET_KEY_LIST', kv)
          commit('SET_ALLPRODUCTS', data)
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  FETCH_CATEGORY({ commit }) {
    console.log('gg')
    return new Promise((resolve, reject) => {
      ContentService.get('category')
        .then((res) => {
          commit('SET_CATEGORY', res.data.data);
          resolve(res.data.data)
        })
        .then(err => reject(err))
    })
  }
}

export const getters = {
  GET_PRODUCT(state) {
    return (link) => {
      const key = state.keyList[link]
      console.log(key);
      return state.allProducts[key]
    }
  }
}


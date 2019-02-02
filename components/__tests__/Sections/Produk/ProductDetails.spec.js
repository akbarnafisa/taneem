import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductDetails from '@/components/Sections/Produk/ProductDetails'
import TestHelpers from '@/test/test-helpers'
import Vuex from 'vuex'
import sinon from 'sinon'

import { mutations } from '@/store/order'

const localVue = createLocalVue()
const product = {
  id: '123335123',
  images: [
    '/images/produk3.jpg',
    '/images/produk1.jpg',
    '/images/produk2.jpg',
    '/images/produk4.jpg'
  ],
  name: '18113',
  price: 130000,
  fromDiscount: 150000,
  colors: ['Grey', 'Crepe Pink', 'Peanut Brown', 'Aqua'],
  sizes: ['S', 'M', 'L'],
  bahan: 'Brukat',
  syari: true,
  hamil: true,
  stock: 20,
  desc:
    'Celana yang terbuat dari bahan katun Stretch yang nyaman di pakai.di bagian samping pinggang memakai sleting.dan bisa di pakai ke kantor atau juga bisa di pakai untuk hangout bareng teman.tinggal di padukan memakai atasan polos atau cardigan,\n '
}

localVue.use(Vuex)

describe('Sorting on Produk', () => {
  let wrapper
  let h
  let store
  let actions

  beforeEach(() => {
    actions = {
      ADD_ORDER: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        order: {
          namespaced: true,
          state: {
            items: [],
            newOrder: {
              name: '',
              price: 0,
              color: null,
              size: null,
              quantity: 1
            }
          },
          mutations,
          actions
        }
      }
    })

    wrapper = shallowMount(ProductDetails, {
      localVue,
      store,
      propsData: {
        product
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors and renders all components', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find({ name: 'Carousel' }).exists()).toBe(true)
  })

  it('reset new order when mounted', () => {
    const spy = sinon.spy(ProductDetails.methods, 'resetOrder')
    shallowMount(ProductDetails, {
      localVue,
      attachToDocument: true,
      store,
      propsData: {
        product
      },
      methods: {

      }
    })
    expect(spy.called).toBeTruthy()
  })

  it('set correct value for color, size and quantity', () => {
    wrapper.vm.handleInput({
      key: 'color',
      value: 'Grey'
    })

    wrapper.vm.handleInput({
      key: 'size',
      value: 'S'
    })

    wrapper.vm.handleInput({
      key: 'quantity',
      value: 5
    })

    const key = store.state.order.newOrder
    expect(key.color).toBe('Grey')
    expect(key.size).toBe('S')
    expect(key.quantity).toBe(5)
  })

  it('dispatch ADD_ORDER when button clicked', () => {
    h.click('.addToCart')
    expect(actions.ADD_ORDER).toHaveBeenCalled()
  })
})

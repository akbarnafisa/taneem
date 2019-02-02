import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProdukSort from '@/components/Sections/Produk/ProdukSort'
import TestHelpers from '@/test/test-helpers'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Sorting on Produk', () => {
  let wrapper
  let h
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          state: {
            sort: [
              'Termurah',
              'Termahal',
              'Terbaru'
            ],
            sortSelected: 'Terbaru'
          },
          mutations: {
            SET_SORT(state, payload) {
              state.sortSelected = payload;
            }
          }
        }
      }
    })

    wrapper = shallowMount(ProdukSort, {
      localVue,
      store
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correct number of sorts', () => {
    const sorts = wrapper.findAll('option')
    expect(sorts.length).toBe(store.state.products.sort.length + 1)
  })

  it('select and mutate correct value', () => {
    const button = wrapper.findAll('option').at(1)
    button.element.selected = true
    wrapper.find('select').trigger('change')
    expect(store.state.products.sortSelected).toBe(button.element.value)
  })
})

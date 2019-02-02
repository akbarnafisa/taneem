import { mutations } from '@/store/order'

describe('blog store module', () => {
  let state
  beforeEach(() => {
    state = {
      items: [],
      newOrder: {
        color: null,
        size: null,
        quantity: 1
      }
    }
  })


  describe('mutations', () => {
    it('add new orders correctly', () => {
      mutations.SET_NEWORDER(state, { key: 'size', value: 'S' })
      mutations.SET_NEWORDER(state, { key: 'quantity', value: 2 })
      mutations.SET_NEWORDER(state, { key: 'color', value: 'Grey' })
      expect(state.newOrder).toEqual({
        color: 'Grey',
        size: 'S',
        quantity: 2
      })
    })
    it('removes new orders correctly', () => {
      mutations.REMOVE_NEWORDER(state)
      expect(state.newOrder).toEqual({
        color: null,
        size: null,
        quantity: 1
      })
    })

    it('adds item to cart correctly when the item is distinct', () => {
      mutations.ADD_CART(state, {
        name: '1',
        price: 1500,
        color: 'Pink',
        size: 'L',
        quantity: 2
      })
      mutations.ADD_CART(state, {
        name: '1',
        price: 1500,
        color: 'Grey',
        size: 'L',
        quantity: 4
      })
      expect(state.items.length).toEqual(2)
    })

    it('adds item to cart correctly when the item is same', () => {
      mutations.ADD_CART(state, {
        name: '1',
        price: 1500,
        color: 'Pink',
        size: 'L',
        quantity: 2
      })
      mutations.ADD_CART(state, {
        name: '1',
        price: 1500,
        color: 'Pink',
        size: 'L',
        quantity: 2
      })
      expect(state.items.length).toEqual(1)
      expect(state.items[0].quantity).toEqual(4)
    })
  })
})

import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductQuantity from '@/components/UI/ProductQuantity'
import TestHelpers from '@/test/test-helpers'

const localVue = createLocalVue()

describe('ProductQuantity', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = shallowMount(ProductQuantity, {
      localVue,
      propsData: {
        quantity: 2,
        stock: 20,
        type: 'default'
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('add correct amount of quantity when the left button clicked', () => {
    h.click('.button--left')
    expect(wrapper.vm.__test).toBe(1)
    expect(wrapper.emitted().handleInput).toBeTruthy()
  })

  it('add correct amount of quantity when the right button clicked', () => {
    h.click('.button--right')
    expect(wrapper.vm.__test).toBe(3)
    expect(wrapper.emitted().handleInput).toBeTruthy()
  })

  it('add correct amount of quantity when the value inputed', () => {
    wrapper.find('input').setValue(13)
    h.click('.product__quantity')
    expect(wrapper.vm.__test).toBe(13)
    expect(wrapper.emitted().handleInput).toBeTruthy()
  })

  it('doesnt lower than 1 when the button clicked', () => {
    wrapper.setProps({
      quantity: 1
    })
    h.click('.button--left')
    expect(wrapper.vm.__test).toBe(1)

  })

  it('doesnt lower than 1 when the value inputted', () => {
    const input = wrapper.find("[name='quantity']")
    input.setValue(0);
    input.trigger('blur')

    expect(Number(input.element.value)).toBe(1)
  })

  it('doesnt exceed the stock  when the button clicked', () => {
    wrapper.setProps({
      quantity: 20
    })
    h.click('.button--right')
    expect(wrapper.vm.__test).toBe(wrapper.vm.stock)
  });

  it('doesnt exceed the stock  when the the value inputted', () => {
    const input = wrapper.find("[name='quantity']")
    input.setValue(21);
    input.trigger('blur')

    expect(Number(input.element.value)).toBe(20)
  })




})

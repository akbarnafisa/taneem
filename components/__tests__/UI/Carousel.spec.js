import { shallowMount, createLocalVue } from '@vue/test-utils'
import Carousel from '@/components/UI/Carousel'
import sinon from 'sinon'
import TestHelpers from '@/test/test-helpers'

const localVue = createLocalVue()

describe('Carousel', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = shallowMount(Carousel, {
      localVue,
      stubs: {
        carouselSlider: '<div class="stub-comments"></div>'
      },
      propsData: {
        type: 'home',
        index: 0,
        data: [
          {
            id: '12333',
            image: '/images/homeslider1.jpg',
            link: '/produk/taneem-18113'
          },
          {
            id: '1233sd3',
            image: '/images/homeslider2.jpg',
            link: '/produk/taneem-18114'
          },
          {
            id: '123asd3sd3',
            image: '/images/homeslider3.jpg',
            link: '/produk/taneem-18115'
          }
        ]
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('add eventListener on mount', () => {
    const spy = sinon.spy(Carousel.methods, 'swipeHandler')
    shallowMount(Carousel, {
      propsData: { data: [], type: 'home' }
    })
    expect(spy.called).toBeTruthy()
  })

  it('add eventListener on mount', () => {
    const spy = sinon.spy(wrapper.vm, 'swipeDestroyer')
    wrapper.destroy()
    expect(spy.called).toBeTruthy()
  })

  it('should render correct element or class depends on the type', () => {
    wrapper.setProps({
      type: 'product'
    })
    h.domHas('.slider-product')
    h.domHas('.slider__item')
    h.domHas('.slider__imageIndicator')
    h.domHasNot('.slider__arrowWrapper')

    wrapper.setProps({
      type: 'home'
    })
    h.domHasNot('.slider-product')
    h.domHasNot('.slider__item')
    h.domHasNot('.slider__imageIndicator')
    h.domHas('.slider__arrowWrapper')
  })

  it('should move the carousel when the right button click ', () => {
    wrapper.setData({
      currIndex: 1
    })
    h.click('.slider__arrowWrapper_right')
    expect(wrapper.vm.currIndex).toBe(2)
    h.click('.slider__arrowWrapper_right')
    expect(wrapper.vm.currIndex).toBe(0)
  })

  it('should move the carousel when the left button clicked ', () => {
    wrapper.setData({
      currIndex: 1
    })
    h.click('.slider__arrowWrapper_left')
    expect(wrapper.vm.currIndex).toBe(0)
    h.click('.slider__arrowWrapper_left')
    expect(wrapper.vm.currIndex).toBe(2)
  })

  it('should move the carousel when the button indicator clicked', () => {
    wrapper.setData({
      currIndex: 1
    })
    h.click('.slider__bullet')
    expect(wrapper.vm.currIndex).toBe(0)
  })

  it('should move the carousel when the mouse hover on image on slider product', () => {
    wrapper.setProps({
      type: 'product'
    })
    wrapper.setData({
      currIndex: 0
    })
    wrapper.findAll('.slider__imageIndicator').at(1).find('img').trigger('mouseover')
    expect(wrapper.vm.currIndex).toBe(1)
  })

})

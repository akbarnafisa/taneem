import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import CarouselSlider from '@/components/UI/CarouselSlider'
import TestHelpers from '@/test/test-helpers'

const localVue = createLocalVue()

describe('CarouselSlider', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = shallowMount(CarouselSlider, {
      localVue,
      propsData: {
        type: 'home',
        currIndex: 0,
        data: {
          id: '12333',
          image: '/images/homeslider1.jpg',
          link: '/produk/taneem-18113'
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders according to the type of the slider', () => {

    h.domHas('.sliderItem__home')
    h.domHasNot('.sliderItem__imageProduk')
    wrapper.setProps({
      type: 'product'
    })
    h.domHasNot('.sliderItem__home')
    h.domHas('.sliderItem__imageProduk')

  })

  it('should display carousel according to current index and has link on slider home', () => {
    const el = wrapper.findAll(RouterLinkStub).at(0)
    expect(el.element.style.display).not.toEqual('none')
    wrapper.setProps({ currIndex: 1 })
    expect(el.element.style.display).toEqual('none')
  });
})

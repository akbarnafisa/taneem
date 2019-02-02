import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductSizes from '@/components/UI/ProductSizes'
import TestHelpers from '@/test/test-helpers'

const localVue = createLocalVue()

describe('ProductSizes', () => {
  let wrapper
  let h

  beforeEach(() => {
    wrapper = shallowMount(ProductSizes, {
      localVue,
      propsData: {
        sizes: ['S', 'M', 'L'],
        error: false,
        selected: null
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('can mount without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('emmit the value', () => {
    wrapper.findAll('.btn').at(1).trigger('click')
    expect(wrapper.emitted().handleInput).toBeTruthy()
  })

  it('shows the value when its selected', () => {
    wrapper.setProps({
      selected: 'S'
    })
    expect(wrapper.find('.selected').html()).toContain('S')
    h.domHasNot('.error')
  })

  it('shows the error ', () => {
    wrapper.setProps({
      error: true,
      selected: null
    })

    h.domHasNot('.selected')
    h.domHas('.error')
  })
})

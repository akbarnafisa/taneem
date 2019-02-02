import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductColor from '@/components/UI/ProductColor'
import TestHelpers from '@/test/test-helpers'


const localVue = createLocalVue()


describe('ProductColor', () => {
  let wrapper
  let h

  beforeEach(() => {

    wrapper = shallowMount(ProductColor, {
      localVue,
      propsData: {
        colors: ['Grey', 'Crepe Pink', 'Peanut Brown', 'Aqua'],
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
    wrapper.findAll('.btn').at(1).trigger('click');
    expect(wrapper.emitted().handleInput).toBeTruthy()
  });

  it('shows the value when its selected', () => {
    wrapper.setProps({
      selected: 'Grey'
    })
    expect(wrapper.find('.selected').html()).toContain('Grey');
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

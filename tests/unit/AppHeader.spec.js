// write tests here
import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

//describe : Create a block of tests, aka a "test suite"
describe('AppHeader', () => {
  //test:create a Jest test
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    //expect(The value to apply matchers against) : An assertion about the expected outcome.
    expect(wrapper.find('button').isVisible()).toBe(false)
    //toBe : Checks that a value is what you expect.
  })

  // async : tell our test to wait until DOM is updated.
  test('if logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})

// Unit Testing Steps:
// 1.Create a test suite(a block of tests) by using "describe"
// 2.Set up your test(s) by using "test"
// 3.Mount the component with vue-test-utils by using "mount"
// 4.Set data,if necessary by using "setData(...)""
// 5 Assert what the result should be by using "expect(...)" along with using async/await when waiting on DOM update.

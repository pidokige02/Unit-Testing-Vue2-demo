import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'
// A note about targeting inputs for production level test.
// <input data-testid="name-input" type="text" v-model="name" />
// const input = wrapper.find('[data-testid="name-input"]')
describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]') // Find text input

    input.setValue('Adam Jahr') // Set value for text input
    wrapper.trigger('submit') // Simulate form submission

    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    //formSubmittedCalls is the array
    expect(formSubmittedCalls).toHaveLength(1)

    // Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
    //[0][0] : { name: 'Adam Jahr' }
  })
})

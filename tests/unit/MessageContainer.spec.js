import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
        //Substitute for the real componebt
          template: `<p data-testid="message">Hello from the db!</p>`
        }
      }
    })

    const stubMessage = 'Hello from the db!'
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(stubMessage)
  })
})

// Stubbing Advantages
// Isolate what you're testing
// Test one thing at a time
// Helps pinpoint what part of your code is broken.

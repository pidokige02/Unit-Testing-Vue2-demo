import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises' //npm i flush-promises --save-dev

jest.mock('@/services/axios')

describe('MessageDisplay', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    //Clears the mock.calls and mock.instances properties of all mocks.
    //Equivalent to calling .mockClear() on every mocked function.
  })

  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce({ text: mockMessage }) //mock the API call
    const wrapper = mount(MessageDisplay)

    await flushPromises() // wait for promise to resolve
    expect(getMessage).toHaveBeenCalledTimes(1) //check that call happened once

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError) //simulate the failed get request
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-testid="message-error"]').element
      .textContent
    expect(displayedError).toEqual(mockError)
  })
})

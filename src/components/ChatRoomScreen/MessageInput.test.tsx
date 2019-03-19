import { createMemoryHistory } from 'history'
import React from 'react'
import { cleanup, render, fireEvent, wait, waitForElement } from 'react-testing-library'
import MessageInput from './MessageInput'

describe('MessageInput', () => {
  afterEach(cleanup)

  it('triggers callback on send button click', async () => {
    const onSendMessage = jest.fn(() => {})

    {
      const { container, getByTestId } = render(<MessageInput onSendMessage={onSendMessage} />)
      const messageInput = getByTestId('message-input')
      const sendButton = getByTestId('send-button')

      fireEvent.keyDown(messageInput, { key: 'f', code: 70, charCode: 70 })
      fireEvent.keyDown(messageInput, { key: 'o', code: 79, charCode: 79 })
      fireEvent.keyDown(messageInput, { key: 'o', code: 79, charCode: 79 })

      await wait(() => expect(messageInput.value).toEqual('foo'))

      throw messageInput.value

      fireEvent.click(sendButton)

      await wait(() =>
        expect(onSendMessage.mock.calls.length).toBe(1)
      )
    }
  })
})

import * as React from 'react'
import ChatsNavbar from './ChatsNavbar'
import ChatsList from './ChatsList'

const ChatsListScreen = ({ history }) => (
  <div>
    <ChatsNavbar />
    <ChatsList history={history} />
  </div>
)

export default ChatsListScreen

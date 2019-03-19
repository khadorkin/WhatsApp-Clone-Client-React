import * as React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import AnimatedSwitch from './components/AnimatedSwitch'
import ChatRoomScreen from './components/ChatRoomScreen'
import ChatsListScreen from './components/ChatsListScreen'

const RedirectToChats = () => (
  <Redirect to="/chats" />
)

const App = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/chats" component={ChatsListScreen} />
      <Route exact path="/chats/:chatId" component={ChatRoomScreen} />
      <Route component={RedirectToChats} />
    </AnimatedSwitch>
  </BrowserRouter>
)

export default App

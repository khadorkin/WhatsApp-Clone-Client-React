import * as React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import ChatRoomScreen from './components/ChatRoomScreen'
import ChatsListScreen from './components/ChatsListScreen'

const RedirectToChats = () => (
  <Redirect to="/chats" />
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/chats" component={ChatsListScreen} />
      <Route exact path="/chats/:chatId" component={ChatRoomScreen} />
      <Route component={RedirectToChats} />
    </Switch>
  </BrowserRouter>
)

export default App

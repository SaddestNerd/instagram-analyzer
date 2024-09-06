import React from "react"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import { useRoutes } from "./routes/general.routes"
import "./style/normalize.css"
import "./style/reset.css"
import "./style/fonts.scss"
import { RecurlyProvider, Elements } from "@recurly/react-recurly"
import { Provider } from 'react-redux';
import store from "./store/store"


function App() {
  const routes = useRoutes()

  return (
    <div className="App">
      <Provider store={store}>
        <RecurlyProvider publicKey="fra-1W3TP1d41gok1zJBD4Cn3O">
          <Elements>
            <BrowserRouter>
              <div className="Main-Wrapper">{routes}</div>
            </BrowserRouter>
          </Elements>
        </RecurlyProvider>
      </Provider>
    </div>
  )
}

export default App

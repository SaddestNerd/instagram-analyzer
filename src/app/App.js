import React from "react"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import { useRoutes } from "./routes/general.routes"
import "./style/normalize.css"
import "./style/reset.css"
import "./style/fonts.scss"

function App() {
  const routes = useRoutes()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="Main-Wrapper">{routes}</div>
      </BrowserRouter>
    </div>
  )
}

export default App

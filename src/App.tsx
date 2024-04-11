import { ThemeProvider } from "styled-components"
import Router from "./router"
import { defaultTheme } from "./theme/defaultTheme"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />  
    </ThemeProvider>
  )
}

export default App

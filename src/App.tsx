import { ThemeProvider } from "styled-components"
import Router from "./router"
import { defaultTheme } from "./theme/defaultTheme"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />  
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App

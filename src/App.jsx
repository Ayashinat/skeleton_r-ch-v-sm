import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {

  const appstyle={
    "display": "flex",
    "flex-direction": "column",
    "min-height": "100vh",
  }

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <div style={appstyle}>
            <Header />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </ChakraProvider>


    </>
  )
}

export default App

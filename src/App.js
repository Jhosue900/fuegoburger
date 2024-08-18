import NavbarCode from "./components/navbar";
import CardsItem from "./components/cards";
import Container from "./components/container";
import Footer from "./components/footer";
import './styles.css';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavbarCode />
        <Container/>
        <CardsItem/>
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;

import { Box } from "@chakra-ui/react"
import { Flex, Spacer, Text, } from '@chakra-ui/react'

import { Header } from "./components/Header";
import NavBar from "./components/Navbar";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
};

export default App;

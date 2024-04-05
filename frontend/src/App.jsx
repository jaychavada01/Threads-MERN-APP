import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <Container
      maxW="620px"
      borderRadius={"7px"}
      boxShadow={"0px 1px 10px"}
      pb={"1px"}
    >
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;

import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Link to={"/markzuckerberg"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>Visit Profile Page</Button>
      </Flex>
    </Link>
  );
};
export default HomePage;

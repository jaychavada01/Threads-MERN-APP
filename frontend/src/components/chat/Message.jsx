import { Avatar, Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

const Message = ({ ownMessage }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} color={"white"} bg={"gray.900"} p={2} borderRadius={"md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in
            cum, fuga reiciendis beatae nam dolore ullam, quae repudiandae culpa
            doloribus, ipsa corporis placeat tenetur quia quas maiores animi
            inventore?
          </Text>
          <Avatar src="" w="7" h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="" w="7" h={7} />

          <Text maxW={"350px"} color={"black"} bg={"gray.400"} p={2} borderRadius={"md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in
            cum, fuga reiciendis beatae nam dolore ullam, quae repudiandae culpa
            doloribus, ipsa corporis placeat tenetur quia quas maiores animi
            inventore?
          </Text>
        </Flex>
      )}
    </>
  );
};
export default Message;

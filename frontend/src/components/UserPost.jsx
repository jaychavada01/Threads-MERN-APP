import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { useState } from "react";

const UserPost = ({ postImg, postTitle, likes, replies }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          {/* profile image */}
          <Avatar size={"md"} name="Mark Zuckerberg" src="/zuck-avatar.png" />

          {/* straight line */}
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>

          {/* avatars of users who did comments */}
          <Box position={"relative"} w={"full"}>
            <Avatar
              size={"xs"}
              name="Jay Chavada"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Jay Chavada"
              src="https://bit.ly/kent-c-dodds"
              position={"absolute"}
              bottom={"0px"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Jay Chavada"
              src="https://bit.ly/code-beast"
              position={"absolute"}
              bottom={"0px"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            {/* left side */}
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                markzuckerberg
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            {/* right side */}
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          {/* post title */}
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}

          {/* actions of likes,comments,repost,share */}
          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          {/*  replies, likes*/}
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
export default UserPost;

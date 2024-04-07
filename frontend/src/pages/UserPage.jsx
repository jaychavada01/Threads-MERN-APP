import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if(data.error){
          showToast("Error",data.error,"error");
          return
        }
        setUser(data)
      } catch (error) {
          showToast("Error", error, "error");
      }
    }
    getUser();
  }, [username,showToast]);

  if(!user) return null;
  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={1500}
        replies={966}
        postImg="/post2.png"
        postTitle="Your Name The great anime movie i have ever watched."
      />
      <UserPost
        likes={121}
        replies={20}
        postImg="/post3.png"
        postTitle="Dodge Srt the beast of the ford cars."
      />
      <UserPost
        likes={521}
        replies={202}
        postImg="/post4.png"
        postTitle="Itachi uchiha is here."
      />
      <UserPost
        likes={521}
        replies={202}
        postTitle="This is my first thread."
      />
    </>
  );
};
export default UserPage;

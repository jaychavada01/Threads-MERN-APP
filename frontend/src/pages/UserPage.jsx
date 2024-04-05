import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
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
        postTitle="Peter and Gwen story this has to be complete."
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

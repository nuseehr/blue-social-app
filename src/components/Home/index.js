import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const Home = ({ posts }) => {
  const postList = posts.map(post => <Post key={post.seq} post={post} />);
  return (
    <div className="posts container">
      <PostForm />
      {postList}
    </div>
  );
};

export default Home;

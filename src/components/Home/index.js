import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const Home = ({ posts, onPostCommit, onLikeClicked }) => {
  const postList = posts.map(post => (
    <Post key={post.seq} post={post} onLikeClicked={onLikeClicked} />
  ));
  return (
    <div className="posts container">
      <PostForm onPostCommit={onPostCommit} />
      {postList}
    </div>
  );
};

export default Home;

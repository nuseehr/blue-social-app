import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const Home = ({
  posts,
  onPostCommit,
  onLikeClicked,
  commentList,
  onCommentSubmit
}) => {
  const postList = posts.map(post => (
    <Post
      key={post.seq}
      post={post}
      onLikeClicked={onLikeClicked}
      commentList={commentList}
      onCommentSubmit={onCommentSubmit}
    />
  ));
  return (
    <div className="posts container">
      <PostForm onPostCommit={onPostCommit} />
      {postList}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Home;

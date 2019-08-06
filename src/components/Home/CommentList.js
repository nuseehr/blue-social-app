import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  const { commentList = [] } = props;

  return (
    <ul className="comment-list">
      {commentList.map(comment => (
        <Comment key={comment.seq} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;

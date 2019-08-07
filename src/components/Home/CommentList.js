import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  const { commentList = [] } = props;

  return (
    <ul className="comment-list">
      {commentList.map(comment => (
        <Comment key={comment.seq} comment={comment} />
      ))}
      <style jsx global>{`
        ul.comment-list {
          padding: 0;
          list-style: none;
        }
      `}</style>
    </ul>
  );
};

export default CommentList;

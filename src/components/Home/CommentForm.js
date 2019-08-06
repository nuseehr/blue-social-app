import React, { useState } from "react";

const CommentForm = ({ postseq, onCommentSubmit }) => {
  const [contents, setContents] = useState("");

  return (
    <form
      className="comment-form"
      onSubmit={e => {
        e.preventDefault();
        onCommentSubmit(postseq, contents);
        setContents("");
      }}
    >
      <textarea
        className="form-control input-lg"
        placeholder="댓글을 입력하세요..."
        spellCheck="false"
        value={contents}
        onChange={e => setContents(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        댓글달기
      </button>
    </form>
  );
};

export default CommentForm;

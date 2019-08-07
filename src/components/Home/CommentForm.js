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
      <style jsx global>{`
        .comment-form {
          margin: 20px;
        }
        .comment-form > textarea.form-control {
          min-height: 20px;
          line-height: 20px;
          border-radius: 0.5rem;
          resize: none;
        }
        .comment-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border-color: unset;
          font-weight: 800;
        }
      `}</style>
    </form>
  );
};

export default CommentForm;

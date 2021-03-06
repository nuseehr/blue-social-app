import React, { useState, useRef, useEffect } from "react";

const CommentForm = props => {
  const {
    postseq,
    minHeight = 20,
    lineHeight = 20,
    placeholder = "댓글을 입력하세요...",
    onCommentSubmit = () => {}
  } = props;
  const [contents, setContents] = useState("");
  const textareaEl = useRef(null);

  useEffect(() => {
    textareaEl.current.style.height = "auto";
    textareaEl.current.style.height =
      textareaEl.current.scrollHeight + lineHeight + "px";
  });
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
        placeholder={placeholder}
        spellCheck="false"
        value={contents}
        ref={textareaEl}
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
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
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

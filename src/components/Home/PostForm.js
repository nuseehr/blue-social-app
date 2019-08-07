import React, { useState, useRef, useEffect } from "react";

const PostForm = props => {
  const {
    minHeight = 100,
    lineHeight = 20,
    placeholder = "무슨 생각을 하고 계신가요?",
    onPostCommit = () => {}
  } = props;
  const [contents, setContents] = useState("");
  const textareaEl = useRef(null);

  useEffect(() => {
    textareaEl.current.style.height = "auto";
    textareaEl.current.style.height =
      textareaEl.current.scrollHeight + lineHeight + "px";
  }, [contents]);

  return (
    <form
      className="write-form"
      onSubmit={e => {
        e.preventDefault();
        onPostCommit(contents);
        setContents("");
      }}
    >
      <textarea
        className="form-control input-lg"
        placeholder={placeholder}
        ref={textareaEl}
        spellCheck="false"
        value={contents}
        onChange={e => setContents(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        공유하기
      </button>
      <style jsx global>{`
        .write-form > textarea.form-control {
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
          padding: 20px;
          font-size: 18px;
          resize: none;
          border: none;
          border-radius: 0.5rem;
          transition: box-shadow ease-in-out 1s;
        }
        .write-form > textarea:focus {
          box-shadow: #999999 0 0 50px;
        }
        .write-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border: none;
          font-weight: 800;
        }
        .write-form {
          margin-bottom: 100px;
        }
      `}</style>
    </form>
  );
};

export default PostForm;

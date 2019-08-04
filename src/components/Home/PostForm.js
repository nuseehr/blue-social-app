import React, { useState } from "react";

const PostForm = props => {
  const { onPostCommit } = props;
  const [contents, setContents] = useState("");

  console.log(onPostCommit);
  return (
    <form
      className="write-form"
      onSubmit={e => {
        e.preventDefault();
        onPostCommit(contents);
        setContents("COMMIT!!!!");
      }}
    >
      <textarea
        className="form-control input-lg"
        placeholder="무슨 생각을 하고 계신가요?"
        spellCheck="false"
        value={contents}
        onChange={e => setContents(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-primary">
        공유하기
      </button>
    </form>
  );
};

export default PostForm;

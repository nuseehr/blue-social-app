import React from "react";
import locale from "date-fns/locale/ko";
import distanceInWords from "date-fns/distance_in_words_to_now";

const Comment = ({ comment }) => {
  const { createAt, writer, contents } = comment;
  const datetime = distanceInWords(createAt, {
    locale,
    addSuffix: true
  });
  console.log("writer", writer);
  return (
    <ul className="comment-list">
      <li className="comment">
        <div className="comment-info">
          <h6 className="comment-writer">{writer.name}</h6>
          <div className="comment-datetime">{datetime}</div>
        </div>
        <p className="comment-text">{contents}</p>
      </li>
    </ul>
  );
};

export default Comment;

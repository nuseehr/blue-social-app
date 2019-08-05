import React from "react";
import locale from "date-fns/locale/ko";
import distanceInWords from "date-fns/distance_in_words_to_now";

const Post = ({ post }) => {
  console.log("POST RENDER", post);
  const {
    createAt,
    writer: { name },
    contents,
    comments,
    likes
  } = post;

  const datetime = distanceInWords(createAt, {
    locale,
    addSuffix: true
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-muted">{datetime}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count">
            <i className="far fa-thumbs-up">{likes}개</i>
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt">{comments}개</i>
          </span>
        </div>
      </div>
      <ul className="comment-list">
        <li className="comment">
          <div className="comment-info">
            <h6 className="comment-writer">Aiden</h6>
            <div className="comment-datetime">10분전</div>
          </div>
          <p className="comment-text">그래요 배워야죠 배워야 남는거죠...</p>
        </li>
      </ul>
      <form className="comment-form">
        <textarea
          className="form-control input-lg"
          placeholder="댓글을 입력하세요..."
          spellCheck="false"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          댓글달기
        </button>
      </form>
    </div>
  );
};

export default Post;

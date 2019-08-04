import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
export default class App extends Component {
  state = { posts: [] };

  render() {
    return (
      <div>
        <Header />
        <Home posts={this.state.posts} />
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: Dotum, "맑은 고딕", "roboto", "Helvetica Neue",
              Helvetica, Arial, "맑은 고딕", malgun gothic, "돋움", Dotum,
              sans-serif;
            color: #202b3d;
            background-color: #e9eaed;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
          }
          body {
            padding: 100px 0;
          }
          .container {
            max-width: 600px;
          }

          nav.fixed-top {
            height: 50px;
          }
          nav.navbar.bg-blue {
            background-color: #3b5999;
          }
          .nav .nav-item .nav-link {
            color: white;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
            line-height: 26px;
          }
          .nav .nav-item .nav-link:hover {
            color: rgba(255, 255, 255, 0.75);
          }

          .navbar-brand i.fa-facebook-square {
            font-size: 27px;
            color: white;
          }

          .nav-link > img {
            width: 25px;
            height: 25px;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 5px;
          }

          .write-form > textarea.form-control {
            min-height: 100px;
            line-height: 20px;
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

          .card {
            padding: 0;
            margin-top: 50px;
            border: none;
            border-radius: 0.5rem;
          }
          .card .card-body {
            padding: 40px;
          }
          .card .card-text {
            padding-top: 20px;
            white-space: pre-wrap;
          }
          .card .card-info {
            height: 20px;
          }
          .card .card-info .thumb-count,
          .card .card-info .comment-count {
            display: inline-block;
            margin-right: 24px;
            vertical-align: middle;
            font-size: 12px;
            cursor: pointer;
            padding: 0;
            border: none;
            background-color: transparent;
            transition: color ease-in-out 0.3s;
            transition: margin-top ease-in-out 0.2s;
          }
          .card .card-info .thumb-count:hover,
          .card .card-info .comment-count:hover {
            color: #007bff;
            margin-top: -3px;
          }
          .card .card-info .thumb-count .on {
            color: #007bff;
          }

          ul.comment-list {
            padding: 0;
            list-style: none;
          }

          li.comment {
            padding: 20px 40px 24px;
            border-bottom: 1px solid #e6ecf5;
            background-color: #fafbfd;
            position: relative;
          }
          li.comment:first-child {
            border-top: 1px solid #e6ecf5;
          }
          li.comment .comment-text {
            padding-top: 20px;
          }

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
      </div>
    );
  }
}

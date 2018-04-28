import React from "react";
import "./Home.css";

import exampleImage from "../images/exampleLook1.png";
import bigExample from "../images/bigExample.jpg";

const Home = () => {
  return (
    <main className="App-main" role="main">
      <section className="main-row">
        <div className="card-feed">
          <article className="card">
            <header className="card-header">
              <div className="card-display">
                <img className="card-displayPhoto" alt="display" />
              </div>
              <div className="card-info">
                <div className="card-uploader">
                  <span> 덕키키 </span>
                </div>
                <div className="card-tags">
                  <span> #미니멀룩 </span>
                  <span> #드로우핏 </span>
                  <span> #데이트 </span>
                </div>
              </div>
            </header>
            <div className="card-picture">
              <img className="card-look" src={exampleImage} alt="Uploaded" />
            </div>
            <div className="card-body">
              <div className="card-interaction">
                <span> Great </span>
                <span> Need Improvement </span>
                <span> Save</span>
              </div>
              <div className="card-content">
                <span>
                  오늘 데일리룩이에요~
                </span>
              </div>
              <div className="card-comments" />
              <div className="card-createdAt">
                1시간 전
              </div>
              <form className="comment-form">
                <textarea
                  className="comment-area"
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  autoCorrect="off"
                />
              </form>
            </div>
          </article>

          <article className="card">
            <header className="card-header">
              <div className="card-display">
                <img className="card-displayPhoto" alt="display" />
              </div>
              <div className="card-info">
                <div className="card-uploader">
                  <span> 덕키키 </span>
                </div>
                <div className="card-tags">
                  <span> #미니멀룩 </span>
                  <span> #드로우핏 </span>
                  <span> #데이트 </span>
                </div>
              </div>
            </header>
            <div className="card-picture">
              <img className="card-look" src={bigExample} alt="Uploaded" />
            </div>
            <div className="card-body">
              <div className="card-interaction">
                <span> Great </span>
                <span> Need Improvement </span>
                <span> Save</span>
              </div>
              <div className="card-content">
                <span>
                  오늘 데일리룩이에요~
                </span>
              </div>
              <div className="card-comments" />
              <div className="card-createdAt">
                1시간 전
              </div>
              <form className="comment-form">
                <textarea
                  className="comment-area"
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  autoCorrect="off"
                />
              </form>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;

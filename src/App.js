import React, { Component } from "react";
import exampleImage from './images/exampleLook1.png';
import bigExample from './images/bigExample.jpg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <div className="nav-fixed">
            <div className="nav-row">
              <div className="nav-logo">
                <span>edit.fit</span>
              </div>
              <div className="nav-search">
                검색
              </div>
              <div className="nav-navigation">
                <div className="navigation-container">
                  <span className="navigation-menu">데일리룩</span>
                  <span className="navigation-menu">에디터</span>
                  <span className="navigation-menu">커뮤니티</span>
                  <span className="navigation-menu">계정</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="App-main" role="main">
          <section className="main-row">
            <div className="card-feed">
              <article className="card">
                <header className="card-header">
                  <div className="card-display">
                    <img 
                      className="card-displayPhoto" 
                      alt="display"
                    />
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
                  <img 
                    className="card-look"
                    src={exampleImage}
                    alt="Uploaded"
                  />
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
                  <img 
                    className="card-displayPhoto" 
                    alt="display"
                  />
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
                <img 
                  className="card-look"
                  src={bigExample}
                  alt="Uploaded"
                />
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
      </div>
    );
  }
}

export default App;

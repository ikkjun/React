import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
      >
        {name}
        <h1>안녕하세요 {name}</h1>
        <h2>리액트</h2>
      </div>
      <input />
    </>
  );
}

export default App;

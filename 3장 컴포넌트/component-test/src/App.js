import React from "react";
import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";

const App = () => {
  return (
    <>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
      <MyComponentClass name="ReactClass" favoriteNumber={1}>
        리액트 클래스
      </MyComponentClass>
    </>
  );
};

export default App;

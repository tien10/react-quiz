import React from "react";
// import { GlobalStyle, Wrapper } from "./App.styles";
import "./App.css";

function App() {
  return (
    <>
      {/* <GlobalStyle>
        <Wrapper>
          <h1>REACT QUIZ</h1>
          <button>Start</button>
          <p>Score:</p>
          <p>Loading Questions...</p>
          <button>Next Question</button>
        </Wrapper>
      </GlobalStyle> */}
      <div className="container">
        <h1>REACT QUIZ</h1>
        <button className="start">Start</button>
        {/* <p className="score">Score:</p> */}
        {/* <p>Loading Questions...</p> */}
        {/* <button className="next">Next Question</button> */}
      </div>
    </>
  );
}

export default App;

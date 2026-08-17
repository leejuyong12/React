

import './App.css'
import { useState } from "react"

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter"
import Register from "./components/Register"
import HookExam from "./components/HookExam"
//컴포넌트 첫 글자는 대문자로!


//State, props, 부모 컴포넌트 셋중에 하나라도 변경되면 자식 컴포넌트까지 리렌더링 된다.


function App() {
  
  

  return (
    <>
      <Register/>
      {/* <Bulb/>
      <Counter/> */}
      <HookExam></HookExam>
    </>
  )
}

export default App

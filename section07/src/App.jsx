import { useState, useEffect, useRef } from 'react'

import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Even"

function App() {
  //여기에 count 만든 이유는 props는 부모에서 자식으로만 데이터 흐름이 가능하기 때문에 여기에 만든것이다.
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //마운트 -> 업데이트 -> 언마운트
  //마운트
  useEffect(()=>{
    console.log("mount");
  },[]);
  //업데이트
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  //의존성 배열(deps, dependency array)

  //setCount를 넘겨주는게 아니라 함수로 만들어서 전달.
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App

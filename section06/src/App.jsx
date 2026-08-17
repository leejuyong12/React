import { useState } from 'react'

import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"


function App() {
  //여기에 count 만든 이유는 props는 부모에서 자식으로만 데이터 흐름이 가능하기 때문에 여기에 만든것이다.
  const [count, setCount] = useState(0);

  //setCount를 넘겨주는게 아니라 함수로 만들어서 전달.
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App

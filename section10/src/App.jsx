
import './App.css'
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
//import Exam from "./components/Exam"

import { useState, useRef, useReducer, useCallback, use } from "react"
  const mockData = [
    {
      id : 0,
      isDone : false,
      content : "React 공부하기",
      date : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "Java 공부하기",
      date : new Date().getTime(),
    },
    {
      id : 2,
      isDone : false,
      content : "Python 공부하기",
      date : new Date().getTime(),
    },
  ]
  //내부 로직이 복잡한건 useReducer로 빼서 쓰고 아니면 useState를 써도 무방하다.
  function reducer(state, action){
    switch (action.type){
      case "CREATE":
        return [action.data, ...state];
      case "UPDATE":
        return state.map((item)=> item.id === action.targetId ? {...item, isDone : !item.isDone} : item)
      case "DELETE":
        return state.filter((item)=> item.id !== action.targetId)
      default:
        return state;
      }

  }
function App() {
  
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData)
  
  const idRef = useRef(3); //useRef 는 값을 기억해두는데, 그 값이 바뀌어도 화면을 다시 그리지 않는 Hook이다.

  // const onCreate = (content) => {
  //   dispatch({
  //     type : "CREATE",
  //     data :{
  //       id : idRef.current++,
  //       isDone : false,
  //       content : content, 
  //       date : new Date().getTime(),
  //     }
  //   })
  // }

  const onCreate = useCallback((content) => {
    dispatch({
      type : "CREATE",
      data :{
        id : idRef.current++,
        isDone : false,
        content : content, 
        date : new Date().getTime(),
      }
    })
  },[]);

  // const onUpdate = (targetId) => {
  //   dispatch({
  //     type: "UPDATE",
  //     targetId : targetId
  //   })
  // }

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    })
  }, []);



  // const onDelete = (targetId) => {
  //   dispatch({
  //     type : "DELETE",
  //     targetId : targetId
  //   })
  // }

  //useCallback 은 mount 되었을때 한번 실행된다.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId
    })
  },[])

  return (

      <div className="App">

        {/* <Exam></Exam> */}
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        
      </div>

  )
}

export default App

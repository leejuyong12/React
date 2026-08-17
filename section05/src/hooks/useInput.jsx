import {useState} from "react"

//hook 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출될 수 없다.
//3. 나만의 훅(커스텀 훅) 직접 만들수있다.

//* 훅은 src밑에 hooks폴더 만들어서 별도 보관

function useInput(){ //이처럼 커스텀훅은 앞에 use만 붙여서 하면 만들수 있다.
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default useInput;
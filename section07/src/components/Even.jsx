import {useEffect} from "react"

const Even = () => {

    useEffect(()=> {
        
        //useEffect 내에 return이 들어가면 클린업, 정리함수 이렇게 부른다.
        //deps 에 [] 가 들어가면 mount되면서 실행하고, 정리함수가 있으면 unmount될때 종료된다.
        return () => {
            console.log("unmount");
        }
    },[]);

    return <div>짝수입니다</div>
}

export default Even;
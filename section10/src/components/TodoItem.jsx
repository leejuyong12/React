import "./TodoItem.css"
import {memo} from "react"

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id)
    }
    //input에 onChange={() => onUpdate(id)} 이렇게 바로 써도됨. 그냥 가독성 때문에 이렇게 따로 함수로 만들어서 씀
    //* 주의할 점은 onChange={onUpdate(id)} 이렇게 하면 안됨. 이건 렌더링하는순간 onUpdate(id) 실행하라는 뜻이다.
    const onClickDelete = () => {
        onDelete(id)
    }
    //button에  onClick={() => onDelete(id) 이렇게 바로 써도됨. 그냥 가독성 때문에 이렇게 따로 함수로 만들어서 씀
    //* 주의할 점은 onClick={onDelete(id)} 이렇게 하면 안됨. 이건 렌더링하는순간 onDelete(id) 실행하라는 뜻이다.
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} readOnly checked={isDone} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

// export default memo(TodoItem, (prevProps, nextProps)=>{
//     //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     //T -> Props 바뀌지 않음, -> 리렌더링 x
//     //F -> Props 바뀜 -> 리렌더링 o

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });
//->> 위에 주석처리한 이유는 App.jsx 에서 onCreate, onDelete, onUpdate 얘네들이 useCallback으로 감싸져있어
//mount 될때 한번 실행되는걸로 바꿨기 때문이다.
// 참고로 위에서 if(prevProps.id !== ~~) 이렇게 했던 이유는
//memo는 얕은비교로 값을 비교하기 때문에(객체는 참조값, 기본형은 그자체의 값) 다르다고 판단해서 저 if문을 넣지 않으면
//다르다고 판단하기 때문제 자체 콜백함수로 저런 조건을 넣어준것이다.

export default TodoItem;
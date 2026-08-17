import "./TodoItem.css"

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

export default TodoItem;
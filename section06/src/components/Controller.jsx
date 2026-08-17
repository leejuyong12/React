
const Controller = ({onClickButton}) => {

    //<button onClick={onClickButton(-1)} 하면 계속 돌아간다. 주의
    return(
        <div>
            <button onClick={()=>{
                onClickButton(-1)
            }}>-1</button>
            <button onClick={()=>{
                onClickButton(-10)
            }}>-10</button>
            <button onClick={()=>{
                onClickButton(-100)
            }}>-100</button>
            <button onClick={()=>{
                onClickButton(100)
            }}>+100</button>
            <button onClick={()=>{
                onClickButton(10)
            }}>+10</button>
            <button onClick={()=>{
                onClickButton(1)
            }}>+1</button>
        </div>
    )
}

export default Controller;
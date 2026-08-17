import "./Header.css";
import { memo } from "react"


const Header = () => {
    return(
        <div className="Header">
            <h3>오늘은 </h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}
//memo 는 부모 컴포넌트가 리렌더링 되어도 props가 변경되지 않는다면 리렌더링 되지 않도록 한다.

export default memo(Header);
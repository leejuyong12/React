import "./Main.css";

const Main = () => {
  const user = {
    name : "이주용",
    isLogin : true,
  }
  // return(
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : 
  //     <div>로그인</div>
  //     }
  //   </>
  // )

  //위아래 두가지 방법이 있다.

  if(user.isLogin){
    return <div className="logout">로그아웃</div>
  }else{
    return <div>로그인</div>
  }
}
export default Main;
const Button = ({children, text}) => {
    const onClickButton = () => {
        console.log(text);
    }
    return (
    <>
    <button onClick={onClickButton}>
        {text}
        {children}
    </button>

    </>
    )
}

export default Button;
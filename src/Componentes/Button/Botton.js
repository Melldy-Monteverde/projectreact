const Button = ({handleClick, color, children, margin, borderRadius}) => {

    return (
        <button onClick={handleClick} style={{ color: color, margin: margin, borderRadius:borderRadius}}>
            {children}
        </button>
    )
}

export default Button 
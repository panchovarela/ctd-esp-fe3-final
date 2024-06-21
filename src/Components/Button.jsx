const Button = ({children, handleClick, className}) => <button onClick={handleClick} className={className}>{children}</button>;

export default Button;
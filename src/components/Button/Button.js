import './Button.css'
function Button (props){
    const {icon}=props;
   return (
       <button className={props.btnStyle} onClick={props.onClick}>
           {
               icon && <span>{icon}</span>
           }
           {props.children}
       </button>
   )
}

export default Button;
import './Labels.css'
function Label(props){
    return(
        <div className='label'>
            <label htmlFor={props.text}>{props.label}</label>
            <p id={props.text}>{props.text}</p>
        </div>
    )
}

export default Label;
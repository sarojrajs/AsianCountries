import Header from "../Header/Header";
import './Layout.css'
function Layout(props){
    return(
        <div className="layout">
            <Header/>
            <div className="layoutContainer">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
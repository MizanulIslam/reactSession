
import "./Header.css";
import {NavBar} from "../nav/Navbar"
export function Header() {
    let myHeading = "OpenMart";
    function subHeading(){
        return "Food Order"
    };
    return (

        <header className="myheader">
            {/* <h1> OPENMART</h1> */}
            <h4>{myHeading}</h4>
            <h5>{subHeading()}</h5>
            <NavBar></NavBar>
            
        </header>
    );
}

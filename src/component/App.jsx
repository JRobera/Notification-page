import React, {useState} from "react";
import notification from "../data";
import Notification from "./Notification.jsx";

function App() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function handeleMouseOver() {
        setIsMouseOver(true);
    }
    function handeleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <div className="inner-div">
            <div className="header">  
                <h1>Notifications</h1>  
                    <span className="">3</span>
                <p style={isMouseOver ? {color: "hsl(219, 85%, 26%)"} : null} onMouseOver={handeleMouseOver} onMouseOut={handeleMouseOut}>Mark all as read</p>
            </div>
            {notification.map( (notification,index) => {
             return (
                <Notification 
                    key={index}
                    source={notification.avatar} 
                    name={notification.name} 
                    action={notification.action} 
                    action_type={notification.action_type}
                    post_time={notification.post_time} 
                    photosource={notification.photo}
                    message={notification.message} />)
             })}

        </div>
    )
}

export default App;
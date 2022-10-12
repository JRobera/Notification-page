import React, { useState } from "react";
import Avatar from "./Avatar.jsx";
import Message from "./Message.jsx";

function Notification(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isMouseOver2, setIsMouseOver2] = useState(false);
    const [isMouseOver3, setIsMouseOver3] = useState(false);
    const [isMouseOver4, setIsMouseOver4] = useState(false);


    function handleMouseOver() {
        setIsMouseOver(true);
    }
    function handleMouseOut() {
        setIsMouseOver(false);
    }
    function handleMouseOverAction() {
        setIsMouseOver2(true);
    }
    function handleMouseOutAction() {
        setIsMouseOver2(false);
    }
    function handleMouseOverMessage() {
        setIsMouseOver3(true);
    }
    function handleMouseOutMessage() {
        setIsMouseOver3(false);
    }function handleMouseOverPhoto() {
        setIsMouseOver4(true);
    }
    function handleMouseOutPhoto() {
        setIsMouseOver4(false);
    }

    return (
        <div className="notification">
            <div className="info">
                <Avatar source={props.source} />
                <div className="detail">
                    <div>
                        <h5 style={isMouseOver ? {color: "hsl(219, 85%, 26%)"} : null} 
                            onMouseOver={handleMouseOver} 
                            onMouseOut={handleMouseOut} 
                            className="name">{props.name}</h5>
                        <p className="action">{props.action} <span style={isMouseOver2 ? {color: "hsl(219, 85%, 26%)"} : null} 
                                                                onMouseOver={handleMouseOverAction} 
                                                                onMouseOut={handleMouseOutAction} 
                                                                className="action-type">{props.action_type}</span></p>
                    </div>
                    <p className="post-time">{props.post_time}</p>
                </div>
            <img style={ isMouseOver4 ? {padding: "1px", border: "2px solid hsl(211, 68%, 94%)", borderRadius: "5px"} : null } 
            onMouseOver={handleMouseOverPhoto}
            onMouseOut={handleMouseOutPhoto}
            className="photo" 
            src={props.photosource} 
            alt="photo" />

            </div>
            <Message handlemouseover3={handleMouseOverMessage} handlemouseout3={handleMouseOutMessage} ismouseover={isMouseOver3} message={props.message} />
        </div>
    )

}

export default Notification;
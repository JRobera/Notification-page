import React from "react";

function Message(props) {
    return (
        <div style={props.ismouseover ? {backgroundColor: "hsl(211, 68%, 94%)"} : null}  
            onMouseOver={props.handlemouseover3} 
            onMouseOut={props.handlemouseout3} 
            className="message">
            <p>{props.message}</p>
        </div>
    )

}

export default Message;
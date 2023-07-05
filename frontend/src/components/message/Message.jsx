import React, { useRef } from "react";

const Message = ({ message }) => {
  const ref = useRef();

  return (
    <div ref={ref} className="message owner">
      <div className="messageInfo">
        <img
          src="https://res.cloudinary.com/dol4aj9y4/image/upload/v1688320044/userAvatar/dnerl8jlx79xrnepqiu9.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hiii</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};

export default Message;

import "./Chat.scss";
import Cam from "../../images/cam.png";
import Add from "../../images/add.png";
import More from "../../images/more.png";
import Messages from "../messages/Messages";
import Input from "../input/Input";
import { useContext } from "react";
import { ChatContext } from "../../store/chatContext";
import profileImage from "../../images/Profile.png";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="profileTilte">
          <img
            src={data.user?.photoURL ? data.user.photoURL : profileImage}
            alt=""
          />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

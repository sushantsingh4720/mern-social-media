import "./Chat.scss";
import Cam from "../../images/cam.png";
import Add from "../../images/add.png";
import More from "../../images/more.png";
import Messages from "../messages/Messages";
import Input from "../input/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Styam</span>
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

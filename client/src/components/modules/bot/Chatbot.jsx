import { useEffect, useState } from "react";
import "./chatbot.css";
import "boxicons";
import { botName, menu } from "./data";
import useChat from "../../../hooks/useChat";

const Chatbot = () => {
  const { messages, sendMessage } = useChat();
  const [showChat, setShowChat] = useState(false);
  const [senderInput, setsenderInput] = useState("");

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    if (showChat) {
      const chatContainer = document.querySelector(".message-view");
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, showChat]);

  const handleChatView = () => setShowChat(!showChat);

  const handleMessageInput = (e) => setsenderInput(e.target.value);

  const handleSendMessage = () => {
    if (senderInput.trim() === "") return;
    sendMessage(senderInput);
    setsenderInput("");
  };

  const sendMessageKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleSendMessage();
    }
  };

  const handleMessageItemClick = (message) => {
    console.log(message);
    sendMessage(message);
  };

  return (
    <section className="chat-bot-section">
      {showChat ? (
        <section className="chatbox-container-main">
          <div className="div-container">
            <div className="left-menu">
              <div className="img-div">
                <img src="src/assets/chat-bot.png" alt="" />
              </div>
              <p className="bot-name">{botName}</p>
            </div>

            <div className="right-menu" onClick={handleChatView}>
              <box-icon
                name="chevron-down"
                size="lg"
                color="#ffffff"
                animation="tada-hover"
              ></box-icon>
            </div>
          </div>

          <div className="chat-view">
            <ul className="message-view">
              {messages?.map((msg, index) => {
                const { sender, message } = msg;
                return (
                  <div
                    key={index}
                    onClick={(e) => handleMessageItemClick(message)}
                    className={`${
                      sender === "You"
                        ? "sender"
                        : sender === menu
                        ? "menu-items"
                        : "bot"
                    }`}
                  >
                    <li
                      id="chat-bubble"
                      className={`${
                        sender === "You"
                          ? "sender-style"
                          : sender === menu
                          ? "menu-items-style"
                          : "bot-style"
                      }`}
                    >
                      {" "}
                      {message}{" "}
                    </li>
                  </div>
                );
              })}
            </ul>
            <div className="input">
              <input
                type="text"
                name="message"
                value={senderInput}
                placeholder="Type a message and press enter"
                id="message"
                className="message-input"
                onChange={handleMessageInput}
                onKeyDown={sendMessageKeyDown}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className="bot-icon" onClick={handleChatView}>
          <box-icon
            type="solid"
            name="conversation"
            color="white"
            size="lg"
            rotate="90"
            flip="horizontal"
            animation="tada-hover"
            pull="left"
          ></box-icon>
        </div>
      )}
    </section>
  );
};

export default Chatbot;

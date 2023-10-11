import { createContext, useEffect, useState } from "react";
import Stomp from "stompjs";
import { templates } from "../components/modules/bot/data";

const ChatContext = createContext();

var stompClient = null;
const URL = "http://localhost:8080/ws";

const ChatProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState(templates);

  useEffect(() => {
    connect();
  }, []);

  function connect() {
    setUsername("Johnson");

    if (username && !isConnected) {
      var socket = new SockJS(URL);
      stompClient = Stomp.over(socket);
      stompClient.connect({}, onConnected, onError);
    }
  }

  function onConnected() {
    // Subscribe to the Public Topic
    setIsConnected(true);
    console.log(stompClient);
    stompClient.subscribe("/topic/public", onMessageReceived);

    // Tell your username to the server
    stompClient.send(
      "/app/chat.addUser",
      {},
      JSON.stringify({ sender: username, type: "JOIN" })
    );

    stompClient.send(
      "/app/talktorobot",
      {},
      JSON.stringify({ sender: username, message: "Who are you?" })
    );
  }

  const sendMessage = (message) => {
    setUsername("Johnson");
    if (username) {
      if (isConnected) {
        console.log("FIRST IF");
        stompClient.subscribe("/topic/public", onMessageReceived);

        stompClient.send(
          "/app/talktorobot",
          {},
          JSON.stringify({ type: "CHAT", sender: username, message: message })
        );
      } else {
        var socket = new SockJS(URL);
        stompClient = Stomp.over(socket);
        console.log("SECOND IF");

        setIsConnected(true);
        stompClient.connect(
          {},
          () => {
            stompClient.subscribe("/topic/public", onMessageReceived);

            stompClient.send(
              "/app/talktorobot",
              {},
              JSON.stringify({
                type: "CHAT",
                sender: username,
                message: message,
              })
            );
          },
          onError
        );
      }

      messages.push({ sender: "You", message: message });
      setMessages([...messages]);
    }
  };

  function onError() {
    setIsConnected(false);
    console.log("ERROR FOUND");
    setError(
      "Could not connect to WebSocket server. Please refresh this page to try again!"
    );
    // connectingElement.style.color = 'red';
    console.log(`error: ${error}`);
  }

  function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);
    console.log("payload: " + JSON.stringify(message));

    messages.push(message);
    setMessages(messages);
  }

  return (
    <ChatContext.Provider
      value={{
        stompClient,
        username,
        connect,
        onConnected,
        onError,
        messages,
        setMessages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };

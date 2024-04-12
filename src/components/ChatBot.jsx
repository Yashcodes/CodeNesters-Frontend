import React from "react";
import { Chat } from "@aidbase/chat";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/Auth";

const ChatBot = () => {
  const { themeMode } = useTheme();
  const [auth] = useAuth();

  return (
    <div style={{ position: "fixed", bottom: "88px", right: "22px" }}>
      <Chat
        chatbotID="X4clXeTSu_tZkgQli885g"
        theme={
          themeMode === "light"
            ? "light"
            : themeMode === "dark"
            ? "dark"
            : "light"
        }
        orientation="right"
        headline="Have Any Doubt?"
        description="Want to know more about our platform!"
        placeholder="Type your message here..."
        maxHeight="44rem"
        initialMessage={`Hi  👋 
      I'm the AI Assistant.

      How can I help you today?`}
        username={auth?.user?.name}
        userID={auth?.user?._id}
        context={`
    The user you are talking to is ${auth?.user?.name}. Greet them by name and help them by providing some faqs with links that your have for codenesters`}
        profileImageURL="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=sph"
      />
    </div>
  );
};

ChatBot._isStatic = true;

export default ChatBot;

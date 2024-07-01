import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./messageParser";
import ActionProvider from "./provider";
import "./chat.css"; // Import CSS for ChatBox styling
import SmartToyIcon from '@mui/icons-material/SmartToy';
function ChatBox() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="chatbox-container">
                {open &&
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}
                    />
                }
            </div>
            <button className="chatbox-button" onClick={() => setOpen(!open)}>
                <SmartToyIcon />
            </button>           
        </div>
    );
}

export default ChatBox;

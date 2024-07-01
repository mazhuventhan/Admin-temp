// in ActionProvider.jsx
import React from 'react';
import data from './chat.json'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const handleChildData = (id) => {       
        const filteredChild = data.child.find((item) => parseInt(item.id) === parseInt(id));
        if (filteredChild) {
            const botMessage = createChatBotMessage(`Child details: ${filteredChild.name}`);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        } else {
            const botMessage = createChatBotMessage('Child not found.');
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }
    };

    const handleRandomMsg = (message) => {
        const randomResponses = [
            "I'm not sure what you mean.",
            "Could you please provide more details?",
            "Sorry, I don't have an answer to that.",
            "Let's talk about something else.",
        ];
        const randomIndex = Math.floor(Math.random() * randomResponses.length);
        const botMessage = createChatBotMessage(randomResponses[randomIndex]);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello, handleChildData,handleRandomMsg
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
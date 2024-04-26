// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        console.log(typeof message, 'msg');
        if (message.includes('hello') || message.includes('hi')) {
            actions.handleHello();
        } else if (!isNaN(Number(message))) {
            actions.handleChildData(message);
        }else{
            actions.handleRandomMsg(message);
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

const MessageHistory = ({list}) => {
    return (
        list && (
            <ul>
                {list.map((message) => {
                    if (message.type === 'message') {
                        return (
                            <Message key={message.id} message={message} from={message.from}/>
                        );
                    } else if (message.type === 'response') {
                        return (
                            <Response key={message.id} message={message} from={message.from}/>
                        );
                    } else if (message.type === 'typing') {
                        return (
                            <Typing key={message.id} message={message} from={message.from}/>
                        );
                    }
                    return null;
                })}
            </ul>
        )
    )
};

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
};

export default MessageHistory;
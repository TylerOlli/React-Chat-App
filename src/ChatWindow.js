import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

class ChatWindow extends Component {
  onMessage = (message) => {
    this.props.onMessage(this.props.user.username, message);
  };

  render() {
    const { user, messages } = this.props;

    return (
      <div className='container'>
        <div className='chat-window'>
          <div className='name sender'>{user.username}</div>
          <MessageHistory messages={messages} user={user} />
          <AddMessage onMessage={this.onMessage} />
        </div>
      </div>
    );
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default ChatWindow;

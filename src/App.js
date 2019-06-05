import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import logo from "./logo.svg";

import "react-chat-widget/lib/styles.css";

class App extends Component {
  state = {
    //number of badge
    badge: 0
  };
  componentDidMount() {
    //when new message recived
    // add to the user view
    addResponseMessage("welcome to this chat");
  }

  handleNewUserMessage = newMessage => {
    //new message or complain haas been typed by the user
    console.log(`New message incomig! ${newMessage}`);

    // Now send the message throught the backend API
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Live chat/support "
          senderPlaceHolder="type your complain"
          showCloseButton="true"
          badge={this.state.badge}
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default App;

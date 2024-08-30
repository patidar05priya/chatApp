import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import { connect, sendMsg  } from './api'; 
import ChatInput from "./components/ChatInput/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  

}


export default App;

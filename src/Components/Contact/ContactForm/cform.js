import React, { Component } from "react";
import "../ContactForm/cform.css";
export default class cform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userTextTitle: "",
      userMessageText: "",
    };
  }
  userNameHandler (event){
    this.setState({
      userName : event.target.value
    })
    
  }

  userEmailHandler (event){
    this.setState({
      userEmail : event.target.value
    })
    
  }

  userTextTitleHandler (event){
    this.setState({
      userTextTitle : event.target.value
    })
    
  }

  userMessageTextHandler (event){
    this.setState({
      userMessageText : event.target.value
    })
    
  }

  render() {
    return (
      <div>
        <form>
          <div className="nameEmail">
            <div className="nameInput">
              <input
                type="text"
                placeholder="نام"
                value={this.state.userName}
                onChange={this.userNameHandler.bind(this)}
              />
            </div>
            <div className="emailInput">
              <input
                type="text"
                placeholder="ایمیل"
                value={this.state.userEmail}
                onChange={this.userEmailHandler.bind(this)}
              />
            </div>
          </div>
          <div className="formTitle">
            <input
              type="text"
              placeholder="عنوان"
              value={this.state.userTextTitle}
              onChange={this.userTextTitleHandler.bind(this)}
            />
          </div>
          <div className="formMessage">
            <textarea
              rows={5}
              placeholder="پیام"
              value={this.state.userMessageText}
              onChange={this.userMessageTextHandler.bind(this)}
            ></textarea>
          </div>
          <div className="formSubmitButton">
            <button>ارسال پیام</button>
          </div>
        </form>
      </div>
    );
  }
}

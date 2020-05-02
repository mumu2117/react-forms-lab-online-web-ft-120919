import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      charsLeft: this.props.maxChars
    };
  }//constructor

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length 
    })
    //console.log(this.state.content)
  }//handleChange

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          name="message" 
          id="message" 
          value={this.state.content} 
          onChange={this.handleChange.bind(this)} 
        />
        <span>Remaining Characters: {this.state.charsLeft}</span>
      </div>
    );//return
  }//render
}//class

export default TwitterMessage;
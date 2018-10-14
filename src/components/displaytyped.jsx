import React, { Component } from "react";
class Dispalytyped extends Component {
  state = {
    inputValue: ""
  };

  render() {
    return (
      <div>
        <div className="row">
          Type Here :
          <span>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={e => {
                this.updateValue(e);
              }}
            />
          </span>
        </div>
        <div className="row">
          You Typed: <span>{this.state.inputValue}</span>
        </div>
      </div>
    );
  }

  updateValue(e) {
    this.setState({ inputValue: e.target.value });
  }
}

export default Dispalytyped;

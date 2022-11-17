import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    count: 0
  };

  Add = () => {
    let circularBar = document.querySelector(".circle");
    let count = this.state.count;
    if (count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }

    switch (this.state.count) {
      case 0:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 10) / 100)")
        });
        break;
      case 1:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 20) / 100)")
        });
        break;
      case 2:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 30) / 100)")
        });
        break;
      case 3:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 40) / 100)")
        });
        break;
      case 4:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 50) / 100)")
        });
        break;
      case 5:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 60) / 100)")
        });
        break;
      case 6:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 70) / 100)")
        });
        break;
      case 7:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 80) / 100)")
        });
        break;
      case 8:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 90) / 100)")
        });
        break;
      case 9:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 100) / 100)")
        });
        break;
      default:
        this.setState({
          count: 10
        });
        break;
    }
  };

  Remove = () => {
    let circularBar = document.querySelector(".circle");
    let count = this.state.count;
    if (count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }

    switch (this.state.count) {
      case 1:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 0) / 100)")
        });
        break;
      case 2:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 10) / 100)")
        });
        break;
      case 3:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 20) / 100)")
        });
        break;
      case 4:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 30) / 100)")
        });
        break;
      case 5:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 40) / 100)")
        });
        break;
      case 6:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 50) / 100)")
        });
        break;
      case 7:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 60) / 100)")
        });
        break;
      case 8:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 70) / 100)")
        });
        break;
      case 9:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 80) / 100)")
        });
        break;
      case 10:
        this.setState({
          circularBar: (circularBar.style.strokeDashoffset =
            "calc(440 - (440 * 90) / 100)")
        });
        break;
      default:
        this.setState({
          count: 0
        });
        break;
    }
  };

  render() {
    return (
      <>
        <div className="card">
          <div className="box">
            <div className="percentCount">
              <h2 className="title">Contador</h2>
              <svg>
                <circle cx={70} cy={70} r={70}></circle>
                <circle cx={70} cy={70} r={70} className="circle"></circle>
              </svg>
              <div className="numberCount">
                <h2>{this.state.count}</h2>
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <button className="btnAdd" onClick={this.Add}>
              +
            </button>
            <button className="btnRemove" onClick={this.Remove}>
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

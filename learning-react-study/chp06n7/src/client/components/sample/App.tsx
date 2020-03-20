import React, { useState } from "react";
import { AppProps, AppState } from "models/sample/AppModels";

const clkStyle = {
  backgroundColor: "red"
};
const nonClkStyle = {
  backgroundColor: "green"
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isClick: false
    };
  }
  onStyleClick = () => {
    const { isClick } = this.state;
    this.setState({
      isClick: !isClick
    });
    const options = {
      body: "Change Color",
      silent: false
      // icon: iconDataURI
    };
    // 데스크탑 알림 요청
    const notification = new Notification("데스크탑 알림 예제", options);
    // 알림 후 5초 뒤,
    setTimeout(function() {
      // 얼람 메시지 닫기
      notification.close();
    }, 5000);
  };
  public render() {
    const { name } = this.props;
    const { isClick } = this.state;
    const btnStyle = isClick ? clkStyle : nonClkStyle;
    return (
      <div>
        <h3>{name}</h3>
        <br />
        <button style={btnStyle} onClick={this.onStyleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default App;

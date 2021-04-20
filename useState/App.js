import React, { useState } from "react";

/**
 * useState hooks 덕분에, 함수에서도 state를 사용할 수 있다.
 * this binding으로 부터 해방.
 */
function App() {
  console.log(React);
  const [item, setItem] = useState(0);
  const plus = () => setItem(item + 1);
  const minus = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{item}</h2>
      <button onClick={plus} style={{ marginRight: "3px" }}>
        plus
      </button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

class AppUgly extends React.Component {
  state = {
    count: 0
  };
  /**
   * this를 현재객체로 binding후 실행할 것.
   */
  plus() {
    this.setState({
      count: this.state.count + 1
    });
  }
  minus() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    console.log("render : ", this);
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>{count}</h2>
        <button onClick={this.plus.bind(this)}>plus</button>
        <button onClick={this.minus.bind(this)}>minus</button>
      </div>
    );
  }
}

export default App;

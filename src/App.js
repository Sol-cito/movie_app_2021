import React from 'react';

class App extends React.Component {
  state = {
    testVar: 10
  }


  /* 리액트 컴포넌트의 생명주기 
  *  constructor -> render -> dismount -> render & update (optional) -> willunmount
  */


  constructor() {
    super() // 부모 클래스(React.Component)의 생성자. 반드시 명시해줘야 함.
    console.log("생성자임")
  }

  componentDidMount() { // 컴포넌트 렌더링을 마치면 호출
    console.log("컴포넌트 디스마운트")
  }

  componentWillUnmount() { // 컴포넌트가 죽을 때 호출
    console.log("컴포넌트 윌 언마운트")
  }

  componentDidUpdate() { // setState 등으로 구성요소에 변경이 발생할 때 호출(이후 render가 재호출됨)
    console.log("컴포넌트 디드 업데이트")
  }

  render() { // 렌더링이 발생할 때 생성
    console.log("렌더링임")
    return (
      <div>
        <h1>클래스형 컴포넌트임 {this.state.testVar} </h1>
        <button onClick={this.Plus}>PlusButton</button>
        <button onClick={this.Minus}>MinusButton</button>
      </div>
    )
  }
  Plus = () => {     // 화살표 함수 문법임.
    this.setState(cur => ({
      testVar: cur.testVar + 1
    }))
  }
  Minus = () => {
    this.setState(cur => ({
      testVar: cur.testVar - 1
    }))
  }
}

export default App; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.

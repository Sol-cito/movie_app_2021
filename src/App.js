import React from 'react';

function Test({fav}) { // <- 구조분해할당
  // params 안에는 컴포넌트를 쓸 때 전달되는 매개변수들이 들어있고, 객체처럼 . 을 이용해서 잡는다.
  return (
    <div>
      { fav }
      
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>This is Sol's first react blog</h1>
      <Test fav = "kin1" />
      <Test fav = "kin2" />
      <Test fav = "kin3" />
    </div>
  );
}

export default App; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.

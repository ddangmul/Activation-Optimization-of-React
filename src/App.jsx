import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // state batching: set함수가 여러개 작성되었을 때, 하나의 리렌더링으로 묶어줌
    setChosenCount(newCount); //첫 번째로 입력된 newCount가 10이라면
    setChosenCount((prevChosenCount) => prevChosenCount + 1); // UI에 11 렌더링
    console.log(chosenCount); // 0 출력
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
// 상태업데이트하는 input 구문을 별도 컴포넌트로 분리, 상태 하위이동
// -> 자식 컴포넌트의 재실행은 부모 컴포넌트의 재실행을 야기하지 않기 때문에, 상태값 변경되어도 해당 컴포넌트만 변경된다.

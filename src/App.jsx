import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    //ChosenCount set함수를 자식 컴포넌트에 전달
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
// 상태업데이트하는 input 구문을 별도 컴포넌트로 분리, 상태 하위이동
// -> 자식 컴포넌트의 재실행은 부모 컴포넌트의 재실행을 야기하지 않기 때문에, 상태값 변경되어도 해당 컴포넌트만 변경된다.

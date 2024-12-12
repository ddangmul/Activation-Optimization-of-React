import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map(
        (
          count // li 요소에 key 설정 필요 (특정 li 식별 용도)
        ) => (
          <HistoryItem key={count.id} count={count.value} /> // index를 key로 사용하지 말기 (인덱스의 값이 변함)
        )
      )}
    </ol>
  );
}

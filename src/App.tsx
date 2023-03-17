import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  increment,
  selectCountValue,
  incrementByAmount,
} from "./features/counter/counterSlice";
function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCountValue);
  const [incrementByAmountState, setIncrementByAmountState] = useState(0);
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementByAmountState));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <br />
        <button onClick={() => dispatch(increment())}>Add +1 to count</button>
        <br />
        <br />
        <p>Increment by amount:</p>
        <input
          type="number"
          value={incrementByAmountState}
          onChange={(e) =>
            setIncrementByAmountState(Number(e.target.value) | 0)
          }
        />
        <button onClick={handleIncrementByAmount}>Add</button>
      </div>
    </div>
  );
}

export default App;

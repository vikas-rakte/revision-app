import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  type AppDispatch,
  type RootState,
} from "../../store";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter-container">
      <h2 className="counter-value">{count}</h2>

      <div className="btn-group">
        <button className="btn increment" onClick={() => dispatch(increment())}>
          +
        </button>

        <button className="btn decrement" onClick={() => dispatch(decrement())}>
          −
        </button>
      </div>
    </div>
  );
};

export default Counter;

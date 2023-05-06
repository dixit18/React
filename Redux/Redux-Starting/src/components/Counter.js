import classes from './Counter.module.css';

import { useSelector,useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const showCounter = useSelector(state=>state.counter.showCounter)

    const incrementHandler = ()=>{
      dispatch(counterActions.incremen())
    }
const increaseHandler = ()=>{
  dispatch(counterActions.increse(10))
}
    const decrementHandler = ()=>{
      dispatch(counterActions.decrement())
    }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { CounterState } from '../components/Counter/counterSlice';

export interface RootStore {
  counter: CounterState;
}

export default configureStore<RootStore>({
  reducer: {
    counter: counterReducer,
  },
});

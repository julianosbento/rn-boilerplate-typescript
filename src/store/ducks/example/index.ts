import { Reducer } from 'redux';
import { ExampleState, ExampleTypes } from './types';

const INITIAL_STATE: ExampleState = {
  example: '',
  loading: false,
  error: false,
};

const reducer: Reducer<ExampleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExampleTypes.GET_EXAMPLE:
      return { ...state, loading: true };
    case ExampleTypes.SET_EXAMPLE:
      return {
        ...state,
        loading: false,
        error: false,
        example: action.payload.example,
      };
    case ExampleTypes.GET_EXAMPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: INITIAL_STATE.example,
      };
    case ExampleTypes.EXAMPLE_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case ExampleTypes.CLEAN_ALL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;

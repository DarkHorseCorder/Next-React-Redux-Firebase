import {TICK} from './types';

export const serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: TICK, light: !isServer, ts: Date.now() })
  }
  
  export const startClock = dispatch => {
    return setInterval(() => {
      // Dispatch `TICK` every 1 second
      dispatch({ type: TICK, light: true, ts: Date.now() })
    }, 1000)
  }
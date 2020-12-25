import {
  PAUSE,
  RESUME_SAGA
} from '../types';

export const pause = () => ({
  type: PAUSE
});

export const resume = () => ({
  type: RESUME_SAGA
});

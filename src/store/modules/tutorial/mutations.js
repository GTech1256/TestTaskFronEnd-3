import {
  isTooLargeStep,
  isTooSmallStep
} from './utils';
import { 
  NEXT_STEP, 
  PREV_STEP,
  SET_STEP,
  TUTORIAL_START,
  TUTORIAL_STOP
 } from '@/store/mutation-types';

export default {
  [NEXT_STEP](state) {
    const newStep = state.currentStep + 1;

    if (isTooLargeStep(newStep)) {
      state.isStarted = false
      state.currentStep = 1;
      return 
    }

    state.currentStep = newStep;
  },
  [PREV_STEP](state) {
    const newStep = state.currentStep - 1

    if (isTooSmallStep(newStep))  
      return;
    
    state.currentStep = newStep;
  },
  [SET_STEP](state, { step }) {
    if (isTooSmallStep(state.currentStep) || isTooLargeStep(state.currentStep))  
      return;
    
    state.currentStep = step;
  },
  [TUTORIAL_START](state) {
    state.isStarted = true
  },
  [TUTORIAL_STOP](state) {
    state.isStarted = false
  }
}
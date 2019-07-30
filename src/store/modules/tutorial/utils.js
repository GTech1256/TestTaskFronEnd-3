import { 
  tutorialBiggestStep, 
  tutorialSmallestStep 
} from '../../../config.js';

export const isTooLargeStep = (newStep) => newStep > tutorialBiggestStep
export const isTooSmallStep = (newStep) => newStep < tutorialSmallestStep
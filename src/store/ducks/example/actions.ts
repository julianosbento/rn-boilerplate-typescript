import { action } from 'typesafe-actions';
import { ExampleTypes } from './types';

export const getExample = () => action(ExampleTypes.GET_EXAMPLE);

export const getExampleFailure = () => action(ExampleTypes.GET_EXAMPLE_FAILURE);

export const setExample = (example: string) =>
  action(ExampleTypes.SET_EXAMPLE, { example });

export const exampleClean = () => action(ExampleTypes.EXAMPLE_CLEAN);

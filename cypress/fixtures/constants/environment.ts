import { TEnvironments } from '../constants/types';

export const environments: TEnvironments = {
  local: '',
  systest: 'https://www.systest.co.in',
  staging: 'https://www.staging.co.in',
  integration: 'https://www.integration.co.in',
  performance: 'https://www.performance.co.in',
};
export const currentEnvironment: keyof TEnvironments = Cypress.env('ENV');
export const baseURL: string = environments[currentEnvironment];
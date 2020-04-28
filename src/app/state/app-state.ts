import { AppState } from './app.reducer';
import { CustomersState } from '../customers/state/customer.reducer';

export interface AppState {
  app: AppState;
  customers: CustomersState
}

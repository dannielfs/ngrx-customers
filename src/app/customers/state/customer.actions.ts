import { Action } from '@ngrx//store';
import { Customer } from '../customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMER = '[Customer] Load Customers',
  LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMER_FAIL = '[Customer] Load Customers Fail'
 }

 export class LoadCustomer implements Action {
   readonly type = CustomerActionTypes.LOAD_CUSTOMER;
 }

 export class LoadCustomerSuccess implements Action {
   readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;
   constructor(public payload: { customers: Customer[]}) {}
 }

 export class LoadCustomerFail implements Action {
   readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;
   constructor(public payload: string) {}
 }

 export type Action = LoadCustomer | LoadCustomerSuccess | LoadCustomerFail;

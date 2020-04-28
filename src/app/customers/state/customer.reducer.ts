const initialState = {
  customers: [
    {
      name: "John Doe",
      phone: "3433253931",
      address: "rua rui barbosa 85",
      membership: "Platinum",
      id: 1
    }
  ],
  loading: false,
  loaded: true
 }

 export function customerReducer(state = initialState, action) {
   switch (action.type) {
     case 'LOAD_CUSTOMERS': {
       return {
         ...state,
         loading: true,
         loaded: false
       }
     }

     default :{
       return state;
     }
   }
 }

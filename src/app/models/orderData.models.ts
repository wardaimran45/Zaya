export interface OrderData {
    firstName: string;
    email: string;
    phoneNumber: string;
    items: Item[];
    totalAmount: number;
  }
  
  export interface Item {
    id: number; 
    title: string;
    price: number;
    qty: number;
  }
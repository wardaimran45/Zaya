export interface OrderData {
    firstName: string;
    email: string;
    phoneNumber: string;
    items: Item[];
    totalAmount: number;
  }
  
  export interface Item {
    id: number; // Add a unique identifier for the product
    title: string;
    price: number;
    qty: number;
  }
interface UserType {
  city: string;
  country: string;
  createdAt: string;
  email: string;
  name: string;
  occupation: string;
  password: string;
  phoneNumber: string;
  role: string;
  state: string;
  transactions: [string];
  updatedAt: string;
  __v: number;
  _id: string;
}

interface MonthData {
  month:string
  totalSales:number;
  totalUnits:number
  _id:string
}

interface Stat {
  createdAt:string
  productId:string
  updatedAt:string
  yearlySalesTotal:number
  yearlyTotalSoldUnits:number
  __v:number
  _id:string
  monthlyData:[MonthData]
}

interface ProductType {
  category:string
  createdAt:string
  description:string
  name:string
  price:number
  rating:number
  supply:number;
  updatedAt:string
  __v:number
  _id:string
  stat:Stat
}

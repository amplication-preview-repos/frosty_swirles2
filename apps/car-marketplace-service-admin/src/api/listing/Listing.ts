import { Car } from "../car/Car";
import { Purchase } from "../purchase/Purchase";
import { User } from "../user/User";

export type Listing = {
  car?: Car | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  purchases?: Array<Purchase>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};

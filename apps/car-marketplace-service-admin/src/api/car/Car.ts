import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Car = {
  createdAt: Date;
  description: string | null;
  id: string;
  listings?: Array<Listing>;
  make: string | null;
  model: string | null;
  price: number | null;
  updatedAt: Date;
  user?: User | null;
  year: number | null;
};

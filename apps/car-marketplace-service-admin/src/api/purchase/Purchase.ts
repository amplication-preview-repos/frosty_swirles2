import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Purchase = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  purchaseDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};

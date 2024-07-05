import { Car } from "../car/Car";
import { Listing } from "../listing/Listing";
import { Purchase } from "../purchase/Purchase";
import { JsonValue } from "type-fest";

export type User = {
  cars?: Array<Car>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  purchases?: Array<Purchase>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

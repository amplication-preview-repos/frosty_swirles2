import { CarCreateNestedManyWithoutUsersInput } from "./CarCreateNestedManyWithoutUsersInput";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { PurchaseCreateNestedManyWithoutUsersInput } from "./PurchaseCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  cars?: CarCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  purchases?: PurchaseCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};

import { CarUpdateManyWithoutUsersInput } from "./CarUpdateManyWithoutUsersInput";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { PurchaseUpdateManyWithoutUsersInput } from "./PurchaseUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cars?: CarUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  purchases?: PurchaseUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};

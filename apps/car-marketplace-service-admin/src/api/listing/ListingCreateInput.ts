import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { PurchaseCreateNestedManyWithoutListingsInput } from "./PurchaseCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  car?: CarWhereUniqueInput | null;
  description?: string | null;
  price?: number | null;
  purchases?: PurchaseCreateNestedManyWithoutListingsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

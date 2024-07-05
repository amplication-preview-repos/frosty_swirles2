import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { PurchaseUpdateManyWithoutListingsInput } from "./PurchaseUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  car?: CarWhereUniqueInput | null;
  description?: string | null;
  price?: number | null;
  purchases?: PurchaseUpdateManyWithoutListingsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};

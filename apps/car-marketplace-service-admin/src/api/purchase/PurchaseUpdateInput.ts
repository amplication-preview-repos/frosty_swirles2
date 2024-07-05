import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseUpdateInput = {
  listing?: ListingWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};

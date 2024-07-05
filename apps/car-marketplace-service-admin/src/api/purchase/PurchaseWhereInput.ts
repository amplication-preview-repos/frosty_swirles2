import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};

import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type UserWhereInput = {
  cars?: CarListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  username?: StringFilter;
};

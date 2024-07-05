import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  car?: CarWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  purchases?: PurchaseListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

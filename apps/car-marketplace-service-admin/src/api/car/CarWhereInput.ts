import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listings?: ListingListRelationFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  price?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  year?: IntNullableFilter;
};

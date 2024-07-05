import { ListingCreateNestedManyWithoutCarsInput } from "./ListingCreateNestedManyWithoutCarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CarCreateInput = {
  description?: string | null;
  listings?: ListingCreateNestedManyWithoutCarsInput;
  make?: string | null;
  model?: string | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
  year?: number | null;
};

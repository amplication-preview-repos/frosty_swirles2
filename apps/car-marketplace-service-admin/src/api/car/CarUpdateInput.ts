import { ListingUpdateManyWithoutCarsInput } from "./ListingUpdateManyWithoutCarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CarUpdateInput = {
  description?: string | null;
  listings?: ListingUpdateManyWithoutCarsInput;
  make?: string | null;
  model?: string | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
  year?: number | null;
};

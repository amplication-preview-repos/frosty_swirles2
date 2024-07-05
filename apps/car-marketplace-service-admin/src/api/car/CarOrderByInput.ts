import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  year?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

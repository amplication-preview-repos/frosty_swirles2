import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";
import { UserTitle } from "../user/UserTitle";

export const PurchaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

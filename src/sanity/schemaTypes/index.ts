import { type SchemaTypeDefinition } from "sanity";
import { houseType } from "./houseType";
import { apartmentType } from "./apartmentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [houseType, apartmentType],
};

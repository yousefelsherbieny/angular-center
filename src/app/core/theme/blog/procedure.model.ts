export interface Procedure {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  descriptions?: (string | { title: string; text: string })[]; // Allow both string and object types
}

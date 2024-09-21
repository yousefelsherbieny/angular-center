export interface Service {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;

  descriptions?: (string | { title: string; text: string })[];
}

export type FieldType = {
  name: string;
  label: string;
  description: string;
  required: true;
  type: string;
  example: string;
  default: string | string[] | boolean | number;
  items: {
    type?: string;
    $ref?: string;
  }
};
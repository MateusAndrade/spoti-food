export interface Value {
  value: string;
  name: string;
}

export interface Validation {
  primitiveType: string;
  entityType: string;
  pattern: string;
  min?: number;
  max?: number;
}

export enum FilterTypes {
  LOCALE = 'locale',
  COUNTRY = 'country',
  TIMESTAMP = 'timestamp',
  LIMIT = 'limit',
  OFFSET = 'offset',
}

export interface Filter {
  id: FilterTypes;
  name: string;
  values?: Value[];
  validation?: Validation;
}

export interface FiltersResponse {
  filters: Filter[];
}

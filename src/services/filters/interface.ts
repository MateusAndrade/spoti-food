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

export interface Filter {
  id: string;
  name: string;
  values: Value[];
  validation: Validation;
}

export interface FiltersResponse {
  filters: Filter[];
}

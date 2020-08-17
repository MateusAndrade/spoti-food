export interface SelectProps<T> extends CommonProps {
  items: T[];
}

export interface CommonProps {
  label: string;
  onChange: (vl: string) => void;
}

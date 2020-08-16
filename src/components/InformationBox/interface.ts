export type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  description: string;
  buttonTitle: string;
  loading: boolean;
};

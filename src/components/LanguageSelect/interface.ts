import { PopoverProps } from '@material-ui/core/Popover';

export type Props = PopoverProps & {
  onSelectLanguage: (lng: string) => void;
};

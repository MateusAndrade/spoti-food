/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import PopOver from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Props } from './interface';

import { BrazilFlag, SpainFlag, UnitedKingdomFlag } from './Flags';
import { useTranslation } from 'react-i18next';

const LanguageList = {
  'pt-BR': {
    flag: BrazilFlag,
  },
  en: {
    flag: UnitedKingdomFlag,
  },
  es: {
    flag: SpainFlag,
  },
};

// changeLanguageOptions

const LanguageSelect = ({
  anchorEl,
  onSelectLanguage,
  open,
  ...rest
}: Props) => {
  const { t } = useTranslation();

  return (
    <PopOver open={open} anchorEl={anchorEl}>
      <List>
        {Object.keys(LanguageList).map((key: string) => {
          // @ts-ignore
          const Flag = LanguageList[key].flag;

          return (
            <ListItem button key={key} onClick={() => onSelectLanguage(key)}>
              <ListItemIcon>
                <Flag width={30} height={30} />
              </ListItemIcon>
              <ListItemText
                primary={t(`profile.changeLanguageOptions.${key}`)}
              />
            </ListItem>
          );
        })}
      </List>
    </PopOver>
  );
};

export default LanguageSelect;

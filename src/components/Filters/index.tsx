import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import * as selectors from '../../store/reducers/selectors';
import * as thunks from '../../store/thunks';

import { Filter, FilterTypes, Value } from '../../services/filters/interface';

import Timestamp from './Timestamp';
import SelectFilter from './Select';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: theme.spacing(2),
      height: 50,
      marginBottom: theme.spacing(1),
    },
    container: {
      display: 'flex',
      margin: theme.spacing(1),
      flex: 1,
    },
    paper: {
      padding: theme.spacing(1),
      marginTop: 0,
      flex: 1,
    },
    componentContainer: {
      marginBottom: theme.spacing(2),
    },
  }),
);

const Filters = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filters = useSelector(selectors.getPlaylistFilters);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    setInterval(() => {
      dispatch(thunks.getFeaturedPlaylists(selectedFilters));
    }, 30000);

    dispatch(thunks.getFeaturedPlaylists(selectedFilters));
  }, [selectedFilters]);

  const handleFilterChange = (key: string, value: string | number) => {
    setSelectedFilters({
      ...selectedFilters,
      [key]: value,
    });
  };

  const cleanFilters = () => setSelectedFilters({});

  const renderComponent = (filter: Filter) => {
    switch (filter.id) {
      case FilterTypes.LOCALE:
        return (
          <SelectFilter<Value>
            label={filter.name}
            items={filter.values || []}
            onChange={(val) => handleFilterChange(FilterTypes.LOCALE, val)}
          />
        );

      case FilterTypes.COUNTRY:
        return (
          <SelectFilter<Value>
            label={filter.name}
            items={filter.values || []}
            onChange={(val) => handleFilterChange(FilterTypes.COUNTRY, val)}
          />
        );

      case FilterTypes.TIMESTAMP:
        return (
          <Timestamp
            label={filter.name}
            onChange={(val) => handleFilterChange(FilterTypes.TIMESTAMP, val)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setShowFilters(false)}>
      <Paper elevation={1} className={classes.root}>
        <Box className={classes.header}>
          <Typography>{t('playlists.filterTitle')}</Typography>
          <Switch
            checked={showFilters}
            onChange={() => setShowFilters(!showFilters)}
          />
        </Box>
        <div className={classes.container}>
          <Collapse in={showFilters} style={{ width: '100%' }}>
            <Box className={classes.paper}>
              {filters.map((filter, index) => (
                <Box className={classes.componentContainer} key={index}>
                  {renderComponent(filter)}
                </Box>
              ))}
            </Box>
            <Box
              marginBottom="10px"
              marginRight="10px"
              display="flex"
              justifyContent="flex-end">
              <Button onClick={cleanFilters}>
                {t('playlists.cleanFilters')}
              </Button>
            </Box>
          </Collapse>
        </div>
      </Paper>
    </ClickAwayListener>
  );
};

export default Filters;

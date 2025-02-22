/** @jsxImportSource @emotion/react */
import React, { useState, useMemo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { MenuProps } from '@mui/material/Menu';
import { Select as MuiSelect } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useIsSmDown } from 'hooks/responsive';
import { Icon } from '../Icon';
import { TextButton } from '../Button';
import { SELECTED_MENU_ITEM_CLASSNAME, useStyles } from './styles';

interface IOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  className?: string;
  options: IOption[];
  value: string | undefined;
  onChange: (e: SelectChangeEvent) => void;
  ariaLabel: string;
  title: string;
}

export const Select: React.FC<ISelectProps> = ({
  className,
  options,
  value,
  onChange,
  ariaLabel,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();
  const isSmDown = useIsSmDown();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const menuProps = useMemo(() => {
    const mobileStyles: Partial<MenuProps> = {
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      anchorReference: 'none',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    };
    return {
      PaperProps: {
        sx: styles.menuWrapper,
      },
      ...(isSmDown ? mobileStyles : {}),
    };
  }, [isSmDown]);

  return (
    <MuiSelect
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      className={className}
      css={styles.root({ isOpened: isOpen })}
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': ariaLabel }}
      IconComponent={() => (
        <Icon css={styles.getArrowIcon({ isMenuOpened: isOpen })} name="arrowDown" />
      )}
      MenuProps={menuProps}
      autoWidth={isSmDown}
    >
      <div css={styles.mobileHeader}>
        <Typography variant="h4">{title}</Typography>

        <TextButton css={styles.closeMenuButton} onClick={handleClose}>
          <Icon name="close" />
        </TextButton>
      </div>
      {options.map(({ value: v, label }) => (
        <MenuItem
          disableRipple
          css={styles.menuItem}
          key={v}
          classes={{ selected: SELECTED_MENU_ITEM_CLASSNAME }}
          value={v}
        >
          {label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

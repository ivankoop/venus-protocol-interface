import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: css`
      flex: 2;
      margin-right: ${theme.spacing(4)};
    `,
  };
};

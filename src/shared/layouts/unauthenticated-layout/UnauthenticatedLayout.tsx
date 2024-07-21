import React from 'react';
import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import { UnauthenticatedLayoutProps } from './UnauthenticatedLayout.props';
import * as styles from './UnauthenticatedLayout.styles';

const UnauthenticatedLayout = ({
  children,
  slogan,
  title,
  subtitle,
}: UnauthenticatedLayoutProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Grid container sx={{ height: '100vh', width: '100vw' }}>
      <Grid xs={12} md={5} item sx={styles.leftBlock(isMobile)}>
        <Typography variant="h1">Decisioner</Typography>
        <Typography variant="body2" color="gray.main">
          {slogan}
        </Typography>
      </Grid>
      <Grid xs={12} md={7} item sx={styles.rightBlock(isMobile)}>
        <Box sx={styles.rightBlockHeader(isMobile)}>
          <Typography variant="h3">{title}</Typography>
          {subtitle && (
            <Typography variant="body1" color="gray.main">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box sx={styles.formContainer(isMobile)}>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default UnauthenticatedLayout;

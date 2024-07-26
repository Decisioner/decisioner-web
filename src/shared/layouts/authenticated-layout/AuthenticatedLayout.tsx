import React, { PropsWithChildren } from 'react';
import { Grid, useMediaQuery, Theme } from '@mui/material';
import { Header, Sidebar } from './ui';
import * as styles from './AuthenticatedLayout.styles';

const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Grid container sx={styles.authenticatedLayout}>
      {!isMobile && (
        <Grid item md={2}>
          <Sidebar />
        </Grid>
      )}
      <Grid item md={10} xs={12}>
        <Header />
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthenticatedLayout;

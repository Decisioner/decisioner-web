import React, { PropsWithChildren } from 'react';
import { Grid, useMediaQuery, Theme } from '@mui/material';
import { Sidebar } from './ui';

const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Grid container>
      {!isMobile && (
        <Grid item md={2}>
          <Sidebar />
        </Grid>
      )}
      <Grid item md={10} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthenticatedLayout;

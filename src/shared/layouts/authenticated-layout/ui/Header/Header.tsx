import React from 'react';
import { useMediaQuery, Theme } from '@mui/material';

const HeaderDesktop = React.lazy(() => import('./HeaderDesktop'));
const HeaderMobile = React.lazy(() => import('./HeaderMobile'));

const Header = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <React.Suspense fallback={null}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </React.Suspense>
  );
};

export default Header;

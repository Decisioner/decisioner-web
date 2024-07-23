import React, { FC, PropsWithChildren, Suspense } from 'react';
import { InitLoader } from './InitLoader';

interface LazyLoadingWrapProps extends PropsWithChildren {
  fallback?: React.ReactNode;
}

const LazyLoadingWrap: FC<LazyLoadingWrapProps> = ({
  children,
  fallback = <InitLoader />,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazyLoadingWrap;

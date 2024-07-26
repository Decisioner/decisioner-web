import { RouteObject } from 'react-router-dom';

type RouterObjectWithTypedPath<U extends string> = {
  [K in keyof RouteObject]: K extends 'path' ? U : RouteObject[K];
};

export type RouteObjectWithEnumPaths<EnumType extends string> = {
  [K in EnumType]: RouterObjectWithTypedPath<K>;
};

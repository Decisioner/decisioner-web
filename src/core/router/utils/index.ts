import { RouteObject } from 'react-router-dom';
import { RouteObjectWithEnumPaths } from '../types';

type RouteElements<T extends string> = {
  [K in T]: Omit<RouteObject, 'path'>;
};

/**
 * Creates an object of route objects from an enum and a corresponding set of route elements.
 *
 * This function takes an enum representing the paths of routes and a corresponding set of
 * route elements, and returns an object where the keys are the enum values and the values are
 * the route objects with the paths and elements specified.
 *
 * @param routesEnum - An enum where the values represent the paths of the routes.
 * @param routeElements - An object where the keys are the enum values and the values are
 *                        objects containing the route elements (without the 'path').
 * @returns An object where the keys are the enum values and the values are route objects.
 *
 * @example
 * enum MainRoutes {
 *   HOME = '/',
 *   ABOUT = '/about',
 * }
 *
 * const routeElements = {
 *   [MainRoutes.HOME]: { element: <HomePage /> },
 *   [MainRoutes.ABOUT]: { element: <AboutPage /> },
 * };
 *
 * const routes = createRouteObjectWithEnumPaths(MainRoutes, routeElements);
 * // routes will be:
 * // {
 * //   '/': { path: '/', element: <HomePage /> },
 * //   '/about': { path: '/about', element: <AboutPage /> },
 * // }
 */
export const createRouteObjectWithEnumPaths = <T extends string>(
  routesEnum: Record<string, T>,
  routeElements: RouteElements<T>
): RouteObjectWithEnumPaths<T> => {
  const routes = {} as RouteObjectWithEnumPaths<T>;

  (Object.keys(routesEnum) as T[]).forEach((key) => {
    routes[key] = {
      path: routesEnum[key],
      ...routeElements[routesEnum[key]],
    };
  });

  return routes;
};

/**
 * Converts an object of routes to an array of route objects.
 * @param routeObject - An object where keys are enum values and values are route objects.
 * @returns An array of route objects.
 */
export function transformToArray<EnumType extends string>(
  routeObject: RouteObjectWithEnumPaths<EnumType>
): RouteObject[] {
  return Object.values(routeObject);
}

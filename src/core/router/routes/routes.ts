import { AuthRoutes } from './auth.routes';
import { MainRoutes } from './main.routes';
import { PollsRoutes } from './polls.routes';

export const Routes = {
  ...MainRoutes,
  ...AuthRoutes,
  ...PollsRoutes,
};

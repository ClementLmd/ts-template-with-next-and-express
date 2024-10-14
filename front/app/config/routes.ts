export const routes = {
  home: '/',
  database: {
    index: '/database',
    get: '/database/get',
    post: '/database/post',
  },
  fetchHelloWorld: '/fetchHelloWorld',
} as const;

type RoutesType = typeof routes;

export type RoutePaths = RoutesType[keyof RoutesType];

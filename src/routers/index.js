import config from '@config';
import Home from '@pages/Home';
// import AccountLayout from 'src/layout/AccountLayout';
// Public routes
const publicRoutes = [
    // { path: config.routes.home, component: Home, layout: AccountLayout },
    {
        path: config.routes.home,
        component: Home
    },
];

const privateRoutes = [];

export {
    publicRoutes,
    privateRoutes
};
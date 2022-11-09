import config from '@config';
import PageNotFound from '@pages/404';
import Home from '@pages/Home';
import Login from '@pages/Login';
import CardManagePage from '@pages/Manage/Cards';
import Register from '@pages/Register';
import AccountLayout from 'src/layout/AccountLayout';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login, layout: AccountLayout },
    { path: config.routes.register, component: Register, layout: AccountLayout },
    { path: '*', component: '', layout: PageNotFound },
];

const privateRoutes = [{ path: config.routes.cards, component: Register, layout: CardManagePage }];

export { publicRoutes, privateRoutes };

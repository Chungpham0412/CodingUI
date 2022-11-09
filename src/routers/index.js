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
    { path: '*', component: '', layout: PageNotFound },
];
// Redirect router when login
const redirectRoutes = [
    { path: config.routes.login, component: Login, layout: AccountLayout },
    { path: config.routes.register, component: Register, layout: AccountLayout },
];
// Private routes
const privateRoutes = [{ path: config.routes.cards, component: Register, layout: CardManagePage }];

export { publicRoutes, redirectRoutes, privateRoutes };

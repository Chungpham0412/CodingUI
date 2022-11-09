import './Sidebar.scss';
import { IconCards, IconUsers, IconFilters } from '@components/Share/Icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo/logo.png';
import * as UserService from 'src/services/UserService';

function Sidebar() {
    const menus = [
        {
            title: 'Dashboard',
            icon: <IconCards />,
            link: '/manage/cards',
        },
        {
            title: 'Members',
            icon: <IconUsers />,
            link: '/manage/users',
        },
        {
            title: 'Filters',
            icon: <IconFilters />,
            link: '/manage/filters',
        },
    ];
    return (
        <div className="sidebar">
            <Logo />
            <ul className="sidebar__ul">
                {menus.map((item, index) => (
                    <MenuItem key={index} menu={item}></MenuItem>
                ))}
            </ul>
            <ButtonLogout></ButtonLogout>
        </div>
    );
}
function ButtonLogout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const result = await UserService.logout();
        if (result.status === true) {
            localStorage.removeItem('token');
            navigate('/');
        }
    };
    const IconLogout = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
        </svg>
    );
    return (
        <div className="sidebar__btn">
            <button className="btn btn-logout" onClick={handleLogout}>
                <span className="icon">{IconLogout}</span>
                <span className="title">Logout</span>
            </button>
        </div>
    );
}
function MenuItem({ menu }) {
    return (
        <li className="sidebar__ul__li">
            <Link to={menu.link}>
                <span className="icon">{menu.icon}</span>
                <span className="title">{menu.title}</span>
            </Link>
        </li>
    );
}
function Logo() {
    return (
        <Link to="/" className="logo-wraper">
            <img src={logo} alt="codingui" className="logo" />
            <span>CodingUI</span>
        </Link>
    );
}

export default Sidebar;

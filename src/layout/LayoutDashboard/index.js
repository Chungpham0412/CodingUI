import './LayoutDashboard.scss';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from 'src/contexts/AuthContext';
import PageNotFound from '@pages/404';
function LayoutDashboard({ children, heading = '', hasPermission = false, back = '' }) {
    const { userInfo } = useAuth();
    if (!userInfo?.name || !hasPermission) return <PageNotFound></PageNotFound>;
    return (
        <>
            <div className="layout__dashboard">
                <div id="colunm-left">
                    <Sidebar />
                </div>
                <div id="content">
                    <div className="flex flex-col items-start gap-5 mb-10">
                        {back && <GoBack back={back} />}
                        <h1 className="inline-flex items-center text-3xl font-bold text-white gap-x-3">
                            <span>{heading}</span>
                        </h1>
                    </div>
                    <div className="children">{children}</div>
                </div>
            </div>
        </>
    );
}
function GoBack({ back }) {
    return (
        <Link href={back}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Back</span>
        </Link>
    );
}
export default LayoutDashboard;

import { Link } from 'react-router-dom';

function LayoutDashboard({ children, heading = '', hasPermission = false, back = '' }) {
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
    return (
        <>
            <div className="page-dashboard">
                <div className="sidebar"></div>
                <div className="main">
                    <div className="flex flex-col items-start gap-5 mb-10">
                        {back && <GoBack back={back} />}
                        <h1 className="inline-flex items-center text-3xl font-bold text-white gap-x-3">
                            <span>{heading}</span>
                        </h1>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

export default LayoutDashboard;

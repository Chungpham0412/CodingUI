import Header from '@components/Share/Header';
function AccountLayout({ children }) {
    return (
        <>
            <Header />
            <div id="content">
                <div className="container">{children}</div>
            </div>
        </>
    );
}

export default AccountLayout;

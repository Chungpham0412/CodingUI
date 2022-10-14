import Header from '@components/Share/Header';
function AccountLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-9">
                        <div className="content">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountLayout;

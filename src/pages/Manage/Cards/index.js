import LayoutDashboard from 'src/layout/LayoutDashboard';

function CardManagePage({ children }) {
    return (
        <LayoutDashboard heading="Manage Card UI" hasPermission>
            <h2>Cards nè</h2>
        </LayoutDashboard>
    );
}

export default CardManagePage;

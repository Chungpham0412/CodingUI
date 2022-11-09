import LayoutDashboard from 'src/layout/LayoutDashboard';

function UsersManagePage({ children }) {
    return (
        <LayoutDashboard heading="Users Filter UI" hasPermission>
            <h2>Users nè</h2>
        </LayoutDashboard>
    );
}

export default UsersManagePage;

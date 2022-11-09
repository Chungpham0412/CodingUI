import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { publicRoutes, redirectRoutes, privateRoutes } from './routers';
import LayoutDashboard from './layout/LayoutDashboard';
import { ToastContainer } from 'react-toastify';
import ModalViewCode from '@components/Modal/ModalViewCode';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function App() {
    const token = localStorage.getItem('token');

    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        {redirectRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = LayoutDashboard;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        token ? (
                                            <Navigate to="/manage/cards" />
                                        ) : (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        )
                                    }
                                />
                            );
                        })}
                        {token &&
                            privateRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = LayoutDashboard;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                    </Routes>
                </div>
            </Router>
            <ToastContainer bodyClassName="toast-container" autoClose={1000}></ToastContainer>
            <ModalViewCode></ModalViewCode>
        </>
    );
}

export default App;

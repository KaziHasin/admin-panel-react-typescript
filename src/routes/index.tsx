import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Users from '../pages/Users';
import Products from '../pages/Products';
import Documents from '../pages/Documents';
import Settings from '../pages/Settings';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Cards from '../pages/ui/Cards';
import Alerts from '../pages/ui/Alerts';
import Buttons from '../pages/ui/Buttons';
import UserProfile from '../pages/UserProfile';
import BasicTable from '../pages/ui-components/tables/BasicTable';
import AdvancedTable from '../pages/ui-components/tables/AdvancedTable';
import DataTableExample from '../pages/ui-components/tables/DataTableExample';
import TanstackReactTable from '../pages/ui-components/tables/TanstackReactTable';
import BlankPage from '../pages/ui-components/pages/BlankPage';
import Forms from '../pages/ui/Forms';
// TODO: Implement proper authentication check
const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? <Layout>{children}</Layout> : <Navigate to="/register" />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    return !isAuthenticated() ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            {/* Protected Routes */}
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/users"
                element={
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>
                }
            />
            <Route
                path="/analytics"
                element={
                    <PrivateRoute>
                        <Analytics />
                    </PrivateRoute>
                }
            />
            <Route
                path="/products"
                element={
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                }
            />
            <Route
                path="/documents"
                element={
                    <PrivateRoute>
                        <Documents />
                    </PrivateRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                }
            />
            <Route
                path="users/profile"
                element={
                    <PrivateRoute>
                        <UserProfile />
                    </PrivateRoute>
                }
            />

            {/* UI Components */}
            <Route
                path="/ui/pages/blank"
                element={
                    <PrivateRoute>
                        <BlankPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/forms"
                element={
                    <PrivateRoute>
                        <Forms />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/cards"
                element={
                    <PrivateRoute>
                        <Cards />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/tables/basic"
                element={
                    <PrivateRoute>
                        <BasicTable />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/tables/data-table"
                element={
                    <PrivateRoute>
                        <DataTableExample />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/tables/transtck-react-table"
                element={
                    <PrivateRoute>
                        <TanstackReactTable />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/tables/advanced"
                element={
                    <PrivateRoute>
                        <AdvancedTable />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/alerts"
                element={
                    <PrivateRoute>
                        <Alerts />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ui/buttons"
                element={
                    <PrivateRoute>
                        <Buttons />
                    </PrivateRoute>
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes; 
import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES_BIG_KEY, ROUTES } from 'utils/const/routes';

import MainPg from 'pages/MainPg';
import AccountLoginPg from 'pages/account/login/AccountLoginPg';

import PrivateRoute from './PrivateRoute';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.MAIN} />} />
        <Route path={ROUTES_BIG_KEY.BIG_KEY} element={<Navigate to={ROUTES.MAIN} />} />

        <Route path={ROUTES.MAIN} element={<MainPg />} />

        {/* 인증을 하지 않아야만 접속가능 페이지 */}
        <Route element={<PrivateRoute authRouter={false} />}>
          <Route path={ROUTES.LOGIN_ACCOUNT} element={<AccountLoginPg />} />
        </Route>

        {/* 인증을 해야만 접속가능 페이지 */}
        <Route element={<PrivateRoute authRouter />}>
          {/* <Route path={ROUTES.TD_RESERVATION} element={<TestDrivingReservationPg />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

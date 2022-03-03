import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from 'base/hooks/Authcontext';

import TopNav from 'components/parts/TopNav';

import PageBookRouter from 'pages/router/PageBookRouter';
import PageAccountsRouter from 'pages/router/PageAccountsRouter';
import PageAdminRouter from 'pages/router/PageAdminRouter';
import MainPage from 'pages/MainPage';
import Footer from 'components/parts/Footer';
import NotFound from 'components/parts/NotFound';
import ErrorForbidden from 'components/parts/ErrorForbidden';

function App() {
  const [auth] = useAuth();

  return (
    <>
      <TopNav />

      <div className="app">
        <Routes>
          {auth?.is_staff && (
            <Route path="/" element={<Navigate to="/admin/" />} />
          )}
          {!auth?.is_staff && <Route path="/" element={<MainPage />} />}
          <Route path="/accounts/*" element={<PageAccountsRouter />} />
          <Route path="/books/*" element={<PageBookRouter />} />
          <Route
            path="/admin/*"
            element={auth.is_staff ? <PageAdminRouter /> : <ErrorForbidden />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* {!auth?.is_staff && ( */}
      <>
        <hr />
        <Footer />
      </>
      {/* )} */}
    </>
  );
}

export default App;

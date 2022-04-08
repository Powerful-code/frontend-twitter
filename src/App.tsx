import React, { lazy, Suspense } from 'react';

import { Auth } from './pages/Auth';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from './store/ducks/user/selectors';
import { FetchGetMe } from './store/ducks/user/actions';
import NotFound from './pages/NotFound';
import Messages from './pages/messages';
import Video from './pages/video';
function App() {
  const dispatch = useDispatch()
  const user: any = useSelector(selectData)
  let navigate = useNavigate();
  React.useEffect(() => {
    dispatch(FetchGetMe())
    if(window.location.pathname === '/') navigate("/home");
  }, [])

  const isAuthenticated = () => {
    try {
      if (user.data !== null) {
        return true;
      }
      else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }


  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/auth',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} />;
    }
    return children
  };



  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="App">
        <Routes>
          <Route
            path="/home/*"
            element={
              <ProtectedRoute
                isAllowed={isAuthenticated()}
                redirectPath="/auth"
              >
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages/*"
            element={
              <ProtectedRoute
                isAllowed={isAuthenticated()}
                redirectPath="/auth"
              >
                <Messages />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/video/*"
            element={
              <ProtectedRoute
                isAllowed={isAuthenticated()}
                redirectPath="/auth"
              >
                <Video />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/auth"
            element={
              <ProtectedRoute
                isAllowed={!isAuthenticated()}
                redirectPath="/home/"
              >
                <Auth />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <NotFound />
            }
          />
        </Routes>

      </div >

    </Suspense>
  );
}

export default App

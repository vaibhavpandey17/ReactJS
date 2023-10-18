import React, { Suspense, Fragment, useContext } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import PageLoading from "src/component/PageLoading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const history = createBrowserHistory();

function App() {


  return (
    <div className="App">

     
          <AuthContext>
            <ToastContainer />
            <Router history={history}>
              <RenderRoutes data={routes} />
            </Router>
          </AuthContext>


    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
       
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

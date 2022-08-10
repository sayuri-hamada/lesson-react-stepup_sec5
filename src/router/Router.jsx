import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      {/** exactは完全一致のもののみを通すので、ルートinedxのみに適用させたい場合は必ずつける */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        //propsから必要な値(url)を取り出す
        render={({ match: { url } }) => (
          <Switch>
            {/** page1Routesのオブジェクトをmapを使用して展開 */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";

import TVDetailsPage from "./pages/TVDetailsPage";
import TVPage from "./pages/TVPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route
            path="/movies"
            element={<TVPage name="movie"></TVPage>}
          ></Route>
          <Route
            path="/tv"
            element={<TVPage name="tv" type="top_rated"></TVPage>}
          ></Route>
          <Route
            path="/movie/:Id"
            element={<TVDetailsPage names="movie"></TVDetailsPage>}
          ></Route>
          <Route
            path="/tv/:Id"
            element={<TVDetailsPage names="tv"></TVDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

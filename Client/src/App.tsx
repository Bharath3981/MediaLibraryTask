import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
import Media from "./components/Media";
import MediaDetails from "./components/MediaDetails";
import { Provider } from "react-redux";
import appStore from "./helpers/appStore";
const Body = lazy(() => import("./components/Body"));

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Media />}></Route>
                <Route path="/media" element={<Media />}></Route>
                <Route path="/media/details" element={<MediaDetails />}></Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

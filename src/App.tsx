import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFound from "./pages/NotFound";
import Single from "./templates/Single";
import Contact from "./pages/Contact";
import Profile from "./pages/Writers/Profile";
import Reviews from "./pages/Reviews/Index";
import Review from "./pages/Reviews/Review";
import Posts from "./pages/Posts";
import Writers from "./pages/Writers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Single />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/writers/:id" element={<Profile />} />
          <Route path="/book-reviews" element={<Reviews />} />
          <Route path="/book-reviews/:id" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

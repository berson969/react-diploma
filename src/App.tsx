import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
// import "./App.css";
import "./index.css";
import AboutPage from "./pages/AboutPage.tsx";
import CatalogPage from "./pages/CatalogPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import Page404 from "./pages/Page404.tsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.tsx";

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route path="/catalog/:id" element={<ItemDetailsPage />}></Route>
            <Route path="/404" element={<Page404 />}></Route>

		</Routes>

    </BrowserRouter>
  )
}

export default App

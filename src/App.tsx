import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import "./index.css";
import AboutPage from "./pages/AboutPage.tsx";
import CatalogPage from "./pages/CatalogPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import Page404 from "./pages/Page404.tsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCart} from "./slices";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		dispatch(fetchCart());
	}, [dispatch]);

  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route path="/catalog/:id" element={<ItemDetailsPage />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path="*" element={<Page404 />}></Route>
		</Routes>
    </BrowserRouter>
  )
}

export default App

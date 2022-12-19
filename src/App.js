import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./app/pages/MainPage";
import SignUpPage from "./app/pages/SignUpPage";
import NavBar from "./app/components/navbar/NavBar";
import PrivatePage from "./app/hoc/PrivatePage";
import ShopPage from "./app/pages/ShopPage";
import LogInPage from "./app/pages/LoginPage";
import GoodPage from "./app/pages/GoodPage";
import CartPage from "./app/pages/CartPage";
import {useDispatch, useSelector} from "react-redux";
import {fatchAllGoods, loadGoods} from "./app/store/goodSlice";
import localStorageService from "./app/services/localStorage.service";
import {logInTokens} from "./app/store/authSlice";
import SpinLoading from "./app/components/SpinLoader";
import AdminPage from "./app/pages/AdminPage";
import LayoutShop from "./app/pages/LayoutShop";
import AdminLayout from "./app/pages/layouts/AdminLayout";
import EditGoodPage from "./app/pages/EditGoodPage";
import Footer from "./app/components/footer/Footer";
import {getCategories, loadCategories} from "./app/store/categorySlice";


function App() {
    const dispatch = useDispatch();
    const categories = useSelector(getCategories());
    const goods = useSelector(fatchAllGoods());
    const localStorageAuth = localStorageService.getAuthUser();

    useEffect(() => {
        dispatch(loadGoods());
        dispatch(loadCategories());
        if (localStorageAuth) {
            dispatch(logInTokens(localStorageAuth));
        }
    }, []);

    return (goods.length > 0 && categories.length > 0 ?
            <div className="relative">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="signup" element={<SignUpPage/>}/>
                    <Route path="login" element={<LogInPage/>}/>
                    <Route path="cart" element={
                        <PrivatePage>
                            <CartPage/>
                        </PrivatePage>
                    }/>
                    <Route path="admin" element={
                        <PrivatePage>
                            <AdminLayout/>
                        </PrivatePage>
                    }>
                        <Route index element={<AdminPage/>}/>
                        <Route path="good/:goodId/edit" element={<EditGoodPage/>}/>
                        <Route path="good/new" element={<EditGoodPage/>}/>
                    </Route>

                    <Route path="shop" element={<LayoutShop/>}>
                        <Route index element={<ShopPage/>}/>
                        <Route path="good/:goodId" element={<GoodPage/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div> : <SpinLoading/>

    );
}

export default App;

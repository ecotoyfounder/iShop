// import MainPage from "./app/pages/MainPage";
// import React from "react";
// import CartPage from "./app/pages/CartPage";
// import ShopPage from "./app/pages/ShopPage";
// import LoginPage from "./app/pages/LoginPage";
// import SignupPage from "./app/pages/SignUpPage";
// import SignUpPage from "./app/pages/SignUpPage";
// import CardsPage from "./app/pages/CardsPage";
// import BoardPage from "./app/pages/BoardPage";
// import BlocksPage from "./app/pages/BlocksPage";
// import {Navigate} from "react-router-dom";
// import GoodPage from "./app/pages/GoodPage";
// import AuthLayout from "./app/layouts/AuthLayout";
//
// const routes = (isLoggedIn, location) => [
//     {
//         path: "/",
//         element: <MainPage/>
//     },
//     {
//         path: "auth",
//         element: <AuthLayout/>,
//         children: [
//             {
//                 path: "",
//                 element: <Navigate to="/auth/signUp"/>
//             },
//             {
//                 path: "login",
//                 element: <LoginPage/>
//             },
//             {
//                 path: "signup",
//                 element: <SignUpPage/>
//             },
//             {
//                 path: "*",
//                 element: <Navigate to="/auth/signUp"/>
//             }
//         ]
//     },
//     {
//         path: "cart",
//         element: isLoggedIn ? <CartPage/> : <Navigate to="/auth/login" state={{referrer: location}}/>,
//         children: [
//             {
//                 path: "",
//                 element: <ShopPage/>
//             },
//             {
//                 path: ":goodId",
//                 element: <GoodPage/>
//             }
//         ]
//     },
//     {
//         path: "shop",
//         element: <ShopPage/>
//     },
//     {
//         path: "login",
//         element: <LoginPage/>
//     },
//     {
//         path: "signUp",
//         element: <SignupPage/>
//     },
//     {
//         path: "cards",
//         element: <CardsPage/>
//     },
//     {
//         path: "boards",
//         element: <BoardPage/>
//     },
//     {
//         path: "blocks",
//         element: <BlocksPage/>
//     }
// ];
//
// export default routes;
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";
import useAuth from "../hooks/useAuth";
import Header from "../layout/Header";
import AdminList from "../layout/AdminList"
import AddRestaurants from "./AddRestaurants";
import Home from "../layout/Home";
import Restaurants from "../layout/Restaurants"
import RestaurantsByName from "./RestaurantsByName";
import Reviews from "../layout/Reviews"
import ReviewImage from "../layout/ReviewImage"
import RestaurantsEdit from "./RestaurantsEdit";


const guestRouter = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header />
        <Outlet />
      </>,
      children: [
        { index: true, element: <LoginForm /> },
        { path: '/Home', element: <Home />} ,
        { path: '/login', element: <LoginForm />} ,
        { path: '/register', element: <RegisterForm />} ,
        { path: '/restaurants' , element : <Restaurants />} ,
        // { path: '/restaurants/name?' , element : <Restaurants />}
      ]
    }
  ])
  
  const userRouter = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header />   
        <Outlet />
      </>,
      children : [
        { index: true, element: <Home /> },
        { path: '/new', element: <AddRestaurants />} ,
        { path: '/edit', element: <AdminList/>} ,
        { path: '/restaurants' , element : <Restaurants />} ,
        { path: '/restaurants/:name' , element : <RestaurantsByName />},
        { path: '/restaurants/:name/reviews' , element : <Reviews/>} ,
        { path: '/restaurants/:name/photos' , element : <ReviewImage/>},
        { path: '/restaurants/edit/:id' , element : <RestaurantsEdit />} ,
      ]
    }
  ])


  export default function AppRouter() {
    const {user} = useAuth()
    const finalRouter = user?.id ? userRouter : guestRouter
    return (
      <RouterProvider router={finalRouter} />
    )
  }
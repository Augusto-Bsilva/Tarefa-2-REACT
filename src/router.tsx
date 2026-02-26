import { createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Book from './pages/Book';
import VerMais from './pages/VerMais'
import RootLayout from "./layouts/RootLayout";
import bookLoader from "./loaders/bookLoader";
import BookBoundery from './error-boundery/bookBoundery';

const router = createBrowserRouter([
    
    {
        
        path:"/",
        element:<Login />
    
    },
    {
        path: "/home",
        element: <RootLayout/>,
        children: [
            {
                index:true,
                element: <Home />

            },
            {
                path: "book/:bookId",
                element: <Book />,
                loader: bookLoader,
                errorElement: <BookBoundery />

            },
            {
                path: "vermais/:genero",
                element: <VerMais/>


            },
        ]
    }
    
])

export default router
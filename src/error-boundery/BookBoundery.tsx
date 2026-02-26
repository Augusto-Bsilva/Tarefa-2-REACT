import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function bookBoundery(){
    const error = useRouteError()
    if(isRouteErrorResponse(error)){

        switch(error.status){
             case 404:
                return <h1>{error.data}</h1>
            case 401:
                return <h1>{error.data}</h1>
            case 400:
               return <h1>{error.data}</h1>
            case 500:
               return <h1>{error.data}</h1>
        }
    }
    return <h1>Algo deu errado!</h1>
}
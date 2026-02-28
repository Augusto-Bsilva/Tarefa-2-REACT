
import { httpAdapter } from "../lib/adapter";
import type { HttpResponse } from "../types/http";
import type bookProps from "../types/livros";
import { baseService } from "./base-service";


class BookService extends baseService {
    
    public async books(limit: number = 4, genero:string): Promise<HttpResponse<bookProps[]>>{
        return this.execute<void, bookProps[]>({

            method:"GET",
            url: '/livros',
            params: { 
                _limit: String(limit),
                genero:genero
            }
        })
    }
    public async bookByID(id:number): Promise<HttpResponse<bookProps>>{
        return this.execute<void, bookProps>({

            method:"GET",
            url: `/livros/${id}`
            
        })
    }
    public async booksByGenero(genero:string, titulo?:string): Promise<HttpResponse<bookProps[]>>{
    return this.execute<void, bookProps[]>({

            method:"GET",
            url: '/livros',
            params: { 
                genero: genero,
                ...(titulo &&{ titulo_like:titulo } )
            }
    })
    }
}

export const bookService = new BookService(httpAdapter)
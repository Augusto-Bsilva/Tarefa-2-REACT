import type bookProps from "./Livros";

export default interface BooksContextType{
    livrosDoGenero: (genero:string) =>Promise<bookProps[]>;
}
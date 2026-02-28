import type bookProps from "./livros";

export interface ApiHookState<TPayload, TData>{
    data?:TData;
    error?: Error;
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    execute: (payload: TPayload) => void;
    reset?: ()=> void;
}

export type HomeState = ApiHookState<void,bookProps[]>;
export type BookState = ApiHookState<number,bookProps>;
export type VerMaisState = ApiHookState<string,bookProps[]>;


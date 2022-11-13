import { state } from "@angular/animations";
import {createReducer,on} from "@ngrx/store";
import {increment,decrement,reset} from './counter.action';
import {InitialState} from './counter.state';

const _createReducer = createReducer(InitialState,
    on(increment,(state) =>
    {
        return  {
        ...state,
        counter : state.counter + 1
        }
    }),
    on(decrement,(state) =>
    {
        return  {
        ...state,
        counter : state.counter - 1
        }
    }),
    on(reset,(state) =>
    {
        return  {
        ...state,
        counter : 0
        }
    })
    )

export function counterReducer(state,action){

    return _createReducer(state,action);
} 
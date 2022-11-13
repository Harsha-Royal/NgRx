import { state } from "@angular/animations";
import {createReducer,on} from "@ngrx/store";
import {increment,decrement,reset, customIncrement, channelNameChange} from './counter.action';
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
    }),
    on(customIncrement,(state,action) =>
    {
        return  {
        ...state,
        counter : state.counter + action.count
        }
    }),
    on(channelNameChange,(state,action) =>
    {
        return  {
        ...state,
        channelName : 'Harsha Kalahasthi'
        }
    })
    )

export function counterReducer(state,action){

    return _createReducer(state,action);
} 
import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');

const getChannelState = createSelector(getCounterState,(state)=>{
    return state.channelName;
})
export const getCounter = createSelector(getCounterState,(state)=>{
    return state.counter;
});


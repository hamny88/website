import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, takeEvery, put } from 'redux-saga/effects';
import mainService from "./api/api";

type MyWebType = {
    currentUser: string;
    quote: string;
}

const myWebInitialState: MyWebType = {
    currentUser: "",
    quote: "",
}

const myWebSlice = createSlice({
    name: 'myweb',
    initialState: myWebInitialState,
    reducers: {
        getQuote(){},
        setQuote(state, action:PayloadAction<{text: string, author: string}>) {
            const {text, author} = action.payload;
            state.quote = text + ' ' + (author !== null ? "@" + author : '');
        },
        setCurrentUser(state, action:PayloadAction<string>) {
            state.currentUser = action.payload;
        }
    }  
});

function* getQuoteWalker() {
    try{
        const {text, author} = yield call(mainService.callAdvice);
       yield put(myWebActionCreators.setQuote({text, author}))
    } catch(err) {
        console.log(err)
    }

}

export function* myWebSaga() {
    const {
        getQuote
    } = myWebActionCreators;
    yield takeEvery(getQuote, getQuoteWalker);
}

export const myWebActionCreators = {
    ...myWebSlice.actions,
};

export const myWebReducer = myWebSlice.reducer;
export type RootState = ReturnType<typeof myWebReducer>;
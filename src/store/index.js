import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import laiyifen from "./reducer/laiyifen"

const reducer = combineReducers({
    laiyifen
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;
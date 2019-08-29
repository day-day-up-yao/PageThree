import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import laiyifen from "./reducer/laiyifen"
import shopcar from "./reducer/shopcar"
const reducer = combineReducers({
    laiyifen,
    shopcar
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;
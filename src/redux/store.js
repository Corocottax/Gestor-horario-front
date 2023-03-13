import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { starterReducer } from "./starter/starter.reducer";

const mainReducer = combineReducers({

    starter: starterReducer

})

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
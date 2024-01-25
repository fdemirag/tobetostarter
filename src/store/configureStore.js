import { configureStore } from "redux" 
import { rootReducer } from "./rootReducer";

export const createStore=() => {
    return configureStore(rootReducer);
}
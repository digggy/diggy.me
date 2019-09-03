import { createStore, compose } from "redux";
import { rootReducer } from "./reducers/index.js";

// No middlewares currently
// Could use thunk/ redux saga :)

export const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

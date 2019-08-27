import { SET_THEME_DARK } from "../actions/index.js";

export const setTheme = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case SET_THEME_DARK:
      return { darktheme: action.payload };
    default:
      return state;
  }
};

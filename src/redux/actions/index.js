export const SET_THEME_DARK = "SET_THEME_DARK";

export function setThemeDark(status) {
  return {
    type: SET_THEME_DARK,
    payload: status
  };
}

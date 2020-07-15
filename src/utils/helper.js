import _get from "lodash/get";
import {LANG_COLOR_MAP} from "../constants/langToColorMap";
export const trimLeft = string =>
    string ? string.replace(/^\s+/, "") : string;

export const formatDate = (date) => {
    const opt = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", opt);
};

export const checkMatch = (searchQuery, data, fields = []) => {
  if (!searchQuery) {
      return true
  }
  const accumText = fields.reduce((a, b) => (a += _get(data, b, "")), "");
  return accumText.includes(searchQuery);
};

export const getLangBgColor = (value) => (value && LANG_COLOR_MAP[value.toLowerCase()]) || getRandomColor();

export const getRandomColor = () => "#"+((1<<24)*Math.random()|0).toString(16);

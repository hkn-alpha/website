import { blurhashToCss } from "blurhash-to-css";

/**
 * Generate at https://blurha.sh/
 * Use 16x5 components as a nice default
 */
const HASH =
  "i8DSL6Ny4.%M~V57?b%LxZ~WX9xtt6NGNI-;xakCI-t7xbMx9GWUM_xZt79txuM{57RjIUITxbs;-n%19vEMjZRiRjxun$";

console.log(blurhashToCss(HASH));

import "styles/main.scss";

importAll(require.context("images", true, /\.(jpg|png|svg|mp4)$/));
function importAll(r) {
  return r.keys().map(r);
}

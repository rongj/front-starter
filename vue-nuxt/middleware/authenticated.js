export default function ({ store, redirect, route }) {
  if (!store.getters['global/isAuthenticated']) {
    return redirect('/login?redirectUrl=' + route.path);
  }
}

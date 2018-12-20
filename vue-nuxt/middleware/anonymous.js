export default function ({ store, redirect }) {
  if (store.getters['global/isAuthenticated']) {
    return redirect('/')
  }
}

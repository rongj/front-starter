export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return;
  const storeCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('vuex='));
  if (!storeCookie) return;
  let vuexCookie = decodeURIComponent(storeCookie).split('=')[1];
  const serverStore = JSON.parse(vuexCookie);
  return serverStore;
}
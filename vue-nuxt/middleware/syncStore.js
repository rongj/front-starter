import { getUserFromCookie } from '@/utils/auth';

export default function ({store, req}) {
   // If nuxt generate, pass this middleware
  if (process.server && !req) return;
  if(process.server) {
    // server sync store
   const data = getUserFromCookie(req);
   if(data) {
    store.commit('global/syncStore', data);  
   }
  }
}

import VuexPersistence from 'vuex-persist';
import Cookies from 'js-cookie';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      restoreState: (key, storage) => Cookies.getJSON(key),
      saveState: (key, state, storage) =>
        Cookies.set(key, state, {
          expires: 1 // 1 day 
        }),
    }).plugin(store);
  });
}

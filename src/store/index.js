import { createStore } from "vuex";

export default createStore({
  state: {
    scrollTrackung_ActiveStepList: {
      step1Active: false,
      step2Active: false,
      step3Active: false,
    },
    //Открытие меню со списком услуг и прогрессом просмотра
    openSpecialMenuStatus: false,
  },
  mutations: {
    changeActiveStepList(state, newValueObj) {
      state.scrollTrackung_ActiveStepList = { ...newValueObj };
    },
    changeOpenSpecialMenuStatus(state, newValue) {
      state.openSpecialMenuStatus = newValue;
    },
  },
  actions: {
    updatedActiveStepList(ctx, newValueObj) {
      ctx.commit("changeActiveStepList", newValueObj);
    },
    updateOpenSpecialMenuStatus(ctx, newValue) {
      ctx.commit("changeOpenSpecialMenuStatus", newValue);
    },
  },
  getters: {
    getscrollTrackungStatus(state) {
      if (state.scrollTrackung_ActiveStepList.step1Active) {
        if (state.scrollTrackung_ActiveStepList.step2Active) {
          if (state.scrollTrackung_ActiveStepList.step3Active) {
            return "active3";
          }
          return "active2";
        }
        return "active1";
      }
      return "";
    },
  },
  modules: {},
});

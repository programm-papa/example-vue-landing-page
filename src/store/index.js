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
    //Открытие попап обратной связи
    openCallBackPopUp: false,
    callBackPopUpType: 'call',
  },
  mutations: {
    changeActiveStepList(state, newValueObj) {
      state.scrollTrackung_ActiveStepList = { ...newValueObj };
    },
    changeOpenSpecialMenuStatus(state, newValue) {
      state.openCallBackPopUp = !!newValue;
    },
    changeOpenCallBackPopUp(state, newValue) {
      state.openCallBackPopUp = !!newValue;
    },
    changeCallBackPopUpType(state, newValue) {
      state.callBackPopUpType = newValue;
    },
  },
  actions: {
    updatedActiveStepList(ctx, newValueObj) {
      ctx.commit("changeActiveStepList", newValueObj);
    },
    updateOpenSpecialMenuStatus(ctx, newValue) {
      ctx.commit("changeOpenSpecialMenuStatus", newValue);
    },
    updateOpenCallBackPopUp(ctx, newValue) {
      ctx.commit("changeOpenCallBackPopUp", newValue);
    },
    updateCallBackPopUpType(ctx, newValue) {
      ctx.commit("changeCallBackPopUpType", newValue);
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

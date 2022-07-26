<template>
  <div class="breaf-wrapper">
    <div data-marquiz-id="629a1993d91bf1004dcfe08b">
      <div class="close-btn" @click="openBreaf = false">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    openBreaf: {
      get() {
        return this.$store.state.openBreaf;
      },
      set(value) {
        this.$store.dispatch("updateOpenBreaf", value);
      },
    },
  },
  mounted() {
    (function (w, d, s, o) {
      var j = d.createElement(s);
      j.async = true;
      j.src = "//script.marquiz.ru/v2.js";
      j.onload = function () {
        if (document.readyState !== "loading") Marquiz.init(o);
        else
          document.addEventListener("DOMContentLoaded", function () {
            Marquiz.init(o);
          });
      };
      d.head.insertBefore(j, d.head.firstElementChild);
    })(window, document, "script", {
      host: "//quiz.marquiz.ru",
      region: "eu",
      id: "629a1993d91bf1004dcfe08b",
      autoOpen: false,
      autoOpenFreq: "once",
      openOnExit: false,
      disableOnMobile: false,
    });
    (function (t, p) {
      window.Marquiz
        ? Marquiz.add([t, p])
        : document.addEventListener("marquizLoaded", function () {
            Marquiz.add([t, p]);
          });
    })("Inline", {
      id: "629a1993d91bf1004dcfe08b",
      buttonText: "Пройти тест",
      bgColor: "#696fe5",
      textColor: "#ffffff",
      rounded: true,
      shadow: "rgba(105, 111, 229, 0.5)",
      blicked: true,
      buttonOnMobile: true,
    });
  },
};
</script>
<style lang="scss" scoped>
.breaf-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 12;
  backdrop-filter: blur(3px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .marquiz__container {
    box-shadow: 0px 0px 27px 7px rgba(34, 60, 80, 0.2);
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    .close-btn {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .line {
        transform: rotate(45deg);
        &:nth-of-type(1) {
          position: absolute;
          width: 28px;
          height: 2px;
          background-color: #cbcdf4;
        }
        &:nth-of-type(2) {
          position: absolute;
          width: 2px;
          height: 28px;
          background-color: #cbcdf4;
        }
      }
    }
  }
}
</style>
<template>
  <Header />
  <PopUp v-if="openCallBackPopUp" key="allPopUp"/>
  <BreafSiteCreate v-if="openBreaf && breafType == 'site'" />
  <BreafBrending v-if="openBreaf && breafType == 'brending'" />
  <router-view />
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PopUp from "@/components/PopUp.vue";
import BreafSiteCreate from "@/components/BreafSiteCreate.vue";
import BreafBrending from "@/components/BreafBrending.vue";
import "@/assets/styles/slider-styles.css";
export default {
  components: {
    Header,
    Footer,
    PopUp,
    BreafSiteCreate,
    BreafBrending,
  },
  computed: {
    openCallBackPopUp: {
      get() {
        return this.$store.state.openCallBackPopUp;
      },
      set(value) {
        this.$store.dispatch("updateOpenCallBackPopUp", value);
      },
    },
    openBreaf: {
      get() {
        return this.$store.state.openBreaf;
      },
      set(value) {
        this.$store.dispatch("updateOpenBreaf", value);
      },
    },
    breafType() {
      return this.$store.state.breafType;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Light.woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Regular.woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Medium.woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Bold.woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Bold.woff");
  font-weight: 800;
  font-style: normal;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Gilroy";
}

a {
  display: block;
  text-decoration: none;
}

.flex {
  display: flex;
  &-column {
    display: flex;
    flex-direction: column;
  }
}

.adaptive {
  display: none;
}

.pink-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  background: #ecc0c7;
  border-radius: 20px;
  //Стили текста
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #5356ae;
  cursor: pointer;
  &:hover {
    background: #ff5555;
    //Стили текста
    color: #ffffff;
  }
  &:active {
    opacity: 0.7;
  }
}
.blue-border-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  border: 2px solid #5356ae;
  border-radius: 20px;
  //Стили текста
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #5356ae;
  cursor: pointer;
  &:hover {
    background: #5356ae;
    //Стили текста
    color: #ffffff;
  }
}
.block {
  .wrapper {
    margin: 0px auto;
    width: 1200px;
    padding: 0px 20px;
  }
}
</style>

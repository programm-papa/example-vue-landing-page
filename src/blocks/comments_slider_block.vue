<template>
  <div class="block" id="block10">
    <div class="wrapper">
      <div class="title flex">
        Честные <span class="decor-line">отзывы</span> наших клиентов
        <!-- <div class="decor-line"></div> -->
      </div>
      <div class="decor-img" id="decor-img1">
        <img src="@/assets/image/block10/comment_pink.png" alt="" />
      </div>
      <div class="swiper-block">
        <div class="wrapper">
          <div class="swiper-pagination-btn-container flex">
            <div class="swiper-button-prev pagination-btn">
              <img
                src="@/assets/image/block6/step1/slider-pagination-arrow.svg"
                alt="arrow"
              />
            </div>
            <div class="swiper-button-next pagination-btn">
              <img
                src="@/assets/image/block6/step1/slider-pagination-arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <swiper
          :slidesPerView="'auto'"
          :centeredSlides="true"
          :spaceBetween="320"
          class="swiper"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <swiper-slide> <div class="swiper-content">1</div> </swiper-slide>
          <swiper-slide> <div class="swiper-content">2</div> </swiper-slide>
          <swiper-slide> <div class="swiper-content">3</div> </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.block {
  &#block10 {
    padding: 120px 0px;
    .wrapper {
      position: relative;
      .title {
        width: 660px;
        margin-bottom: 80px;
        //Стили текста
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #424c5c;
        display: flex;
        .decor-line {
          display: inline;
          border-bottom: 10px solid #696fe6;
          margin-top: 0px;
          padding: 0px 5px;
          // width: 130px;
          // height: 10px;
          // background: #696fe6;
        }
      }
      .decor-img {
        position: absolute;
        &#decor-img1 {
          top: 320px;
          left: 12px;
          width: 285px;
          height: 266px;
        }
      }
      .swiper-container {
        overflow: visible !important;
      }
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: rgb(145, 75, 75);

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .swiper-slide {
        width: 80%;
      }

      .swiper-slide:nth-child(2n) {
        width: 60%;
      }

      .swiper-slide:nth-child(3n) {
        width: 40%;
      }
    }
  }
}
</style>

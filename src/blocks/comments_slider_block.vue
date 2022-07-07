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
      <div class="decor-img" id="decor-img2">
        <img src="@/assets/image/block10/comment_blue.png" alt="" />
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
            nextEl: '#block10 .swiper-button-next',
            prevEl: '#block10 .swiper-button-prev',
          }"
        >
          <swiper-slide>
            <div class="swiper-content">
              <div class="top flex">
                <div class="avatar-block"></div>
                <div class="comment">
                  <svg
                    width="107"
                    height="47"
                    viewBox="0 0 107 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="triangle"
                  >
                    <path
                      d="M16.5917 36.5164L16.9523 37.5H18H80.5L81.0668 34.6112L7.56685 4.61123L4.42256 3.32784L5.59169 6.51638L16.5917 36.5164Z"
                      fill="white"
                      stroke="#5356AE"
                      stroke-width="3"
                    />
                    <path d="M7 6L21.966 47H107L7 6Z" fill="white" />
                    <rect y="36" width="83" height="5" fill="white" />
                  </svg>
                  В студию <b>АРТ</b> горка мне посоветовал обратиться близкий
                  человек, и это тот случай когда от сотрудничества были
                  превзойдены самые смелые ожидания!<br /><br />Коллеги сделали
                  полный ребрендинг нашей цифровой стоматологии и запустили
                  лучший сайт в городе. Им так понравилось работать с нами, что
                  они решили отдельно заняться медицинским маркетингом и
                  запустили нишевый проект «АРТ клиника».<br /><br />Прошлым
                  летом даже сложилась ситуация, когда мы не могли без потери
                  качества в сервисе справляться с текущим потоком пациентов и
                  попросили временно уменьшить объем рекламы. Однозначно
                  рекомендую!
                </div>
              </div>
              <div class="commentator-name">Гривков Алексей Сергеевич</div>
              <div class="commentator-post">
                Клиника «ДоДоктор» – главный врач, стоматолог-ортопед, хирург,
                имлапантолог
              </div>
            </div>
          </swiper-slide>
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
    padding: 120px 0px 0px;
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
          top: 176px;
          left: -40px;
          width: 285px;
          height: 266px;
        }
        &#decor-img2 {
          top: -20px;
          left: 880px;
          width: 285px;
          height: 266px;
        }
      }
      .swiper-block {
        .swiper-pagination-btn-container {
          width: 140px;
          height: 60px;
          position: absolute;
          left: 86%;
          top: 300px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .pagination-btn {
            position: relative;
            width: 40px;
            height: 40px;
            background: #f3f4f9;
            border-radius: 100%;
            user-select: none;
            &:hover {
              width: 60px;
              height: 60px;
            }
          }
          .swiper-button-next {
            transform: rotate(180deg);
          }
          .pagination-btn::after {
            display: none !important;
          }
        }
        .swiper-content {
          .top {
            gap: 60px;
            .avatar-block {
              width: 200px;
              height: 200px;
              border-radius: 100%;
              background: #f3f4f9;
            }
            .comment {
              background-color: #ffffff;
              padding: 25px 30px;
              height: fit-content;
              border: 3px solid #5356ae;
              border-radius: 20px;
              flex: 1;
              position: relative;
              margin-bottom: 50px;
              //Стили текста
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              color: #424c5c;
              .triangle {
                position: absolute;
                bottom: -35.8px;
                transform: scale(1, -1);
                left: 121px;
              }
            }
          }
          .commentator-name {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.02em;
            color: #696fe6;
            margin-bottom: 10px;
          }
          .commentator-post {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #424c5c;
          }
        }
      }

      //Отдельно стили для свайпера
      .swiper-container {
        // overflow: visible !important;
        padding-bottom: 120px;
      }
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        width: 760px;
        padding: 30px 40px;
        box-shadow: 0px 14px 30px rgba(105, 111, 229, 0.14);
        background: #ffffff;
        border-radius: 20px;
      }
    }
  }
}
</style>

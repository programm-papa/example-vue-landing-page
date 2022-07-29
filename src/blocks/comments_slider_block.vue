<template>
  <div class="block" id="block10">
    <div class="wrapper">
      <div class="title flex">
        <span>Честные </span><span>отзывы </span> <span>наших </span>
        <span>клиентов</span>
        <!-- <div class="decor-line"></div> -->
      </div>
      <div class="decor-img" id="decor-img1">
        <img src="@/assets/image/block10/comment_pink.webp" alt="" />
      </div>
      <div class="decor-img" id="decor-img2">
        <img src="@/assets/image/block10/comment_blue.webp" alt="" />
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
              <div class="avatar-block">
                <img
                  src="@/assets/image/block10/AlexandrGrivkov.webp"
                  alt="avatar"
                />
              </div>
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
                В студию <b>ART gorka</b> мне посоветовал обратиться близкий
                человек, и это тот случай когда от сотрудничества были
                превзойдены самые смелые ожидания!<br /><br />Коллеги сделали
                полный ребрендинг нашей цифровой стоматологии и запустили лучший
                сайт в городе. Им так понравилось работать с нами, что они
                решили отдельно заняться медицинским маркетингом и запустили
                нишевый проект «АРТ клиника».<br /><br />Прошлым летом даже
                сложилась ситуация, когда мы не могли без потери качества в
                сервисе справляться с текущим потоком пациентов и попросили
                временно уменьшить объем рекламы. Однозначно рекомендую!
              </div>
              <div class="commentator-name">Гривков Алексей Сергеевич</div>
              <div class="commentator-post">
                Клиника «ДоДоктор» – главный врач, стоматолог-ортопед, хирург,
                имлапантолог
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-content">
              <div class="avatar-block">
                <img
                  src="@/assets/image/block10/OlgaVinogradova.webp"
                  alt="avatar"
                />
              </div>
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
                С «Артгоркой» знакомы уже более шести лет, они помогли нам
                по-другому взглянуть на стиль нашей клиники. Сейчас наша клиника
                находится на том уровне развития, когда нам просто нужно
                поддерживать спрос на себя без громких рекламных кампаний!
                Ребята создали отдельное направление
                <b>«Артклиника»</b> и мы продолжаем сотрудничать с ними в части
                SMM. Благодаря их работе в нашу группу постоянно присоединяются
                новые подписчики! Сотрудники всегда на связи, у них море новых
                идей и концепций для продвижения! Все быстро, четко и всегда
                предвосхищает наши ожидания!
              </div>
              <div class="commentator-name">Виноградова Ольга</div>
              <div class="commentator-post">
                Семейная стоматология «Новый Стандарт 32»
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-content">
              <div class="avatar-block">
                <img
                  src="@/assets/image/block10/IlyaAndrushkiv.webp"
                  alt="avatar"
                />
              </div>
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
                3 года назад услышал рекламу студии на радио.<br /><br />
                Мне предложили начать с продвижения группы ВК. Новых клиентов
                привлекали таргетированной рекламой. Смело скажу, что доволен
                результатами продвижения и мы работаем по сегодняшний день. На
                тот момент задумывался и о сайте. Позднее, с запуском сайта,
                заявки стали поступать чаще: полезный ресурс дал мощное
                конкурентное преимущество. Поначалу отпугивала стоимость, но
                теперь скажу однозначно — работы стоили своих денег.
              </div>
              <div class="commentator-name">Андрушкив Илья Юрьевич</div>
              <div class="commentator-post">
                Стоматология «Смайл», гендиректор
              </div>
            </div>
          </swiper-slide>
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
        flex-wrap: wrap;
        gap: 7px;
        span:nth-child(2) {
          display: inline;
          border-bottom: 10px solid #696fe6;
          margin-top: 0px;
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
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 0px 60px;
          .avatar-block {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            background: #f3f4f9;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
            }
          }
          .comment {
            background-color: #ffffff;
            padding: 25px 30px;
            height: fit-content;
            border: 3px solid #5356ae;
            border-radius: 20px;
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
          .commentator-name {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.02em;
            color: #696fe6;
            margin-bottom: 10px;
            grid-row: 2;
            grid-column: 1/3;
          }
          .commentator-post {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #424c5c;
            grid-row: 3;
            grid-column: 1/3;
          }
        }
      }

      //Отдельно стили для свайпера
      .swiper-container {
        // overflow: visible !important;
        padding: 20px;
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
  @media screen and (max-width: 1365px) {
    &#block10 {
      .wrapper {
        width: 768px;
        .decor-img {
          position: absolute;
          &#decor-img1 {
            top: 321px;
            left: -108px;
          }
          &#decor-img2 {
            top: -20px;
            left: 595px;
          }
        }
        .swiper-block {
          position: relative;
          .wrapper {
            position: absolute;
            height: 100%;
            .swiper-pagination-btn-container {
              left: 75%;
              top: auto;
              bottom: 54px;
            }
          }
          .swiper-content {
            gap: 0 20px;
          }
        }
        .swiper-slide {
          width: 100%;
          padding: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    &#block10 {
      .wrapper {
        width: 100%;
        padding: 0px calc(10px + 40 * (100vw - 320px) / (767 - 320));
        .title {
          margin-bottom: 40px;
          max-width: 660px;
          width: 100%;
          font-size: calc(24px + 6 * (100vw - 320px) / (767 - 320));
          line-height: calc(32px + 6 * (100vw - 320px) / (767 - 320));
          span:nth-child(2) {
            display: inline;
            border-bottom: 0px solid #696fe6;
            margin-top: 0px;
          }
          span:nth-child(4) {
            display: inline;
            border-bottom: 10px solid #696fe6;
            margin-top: 0px;
          }
        }
        .decor-img {
          &#decor-img1 {
            top: 349px;
          }
          &#decor-img2 {
            top: -1px;
            left: auto;
            right: -61px;
          }
        }
        .swiper-block {
          .wrapper {
            .swiper-pagination-btn-container {
              z-index: 2;
              left: auto;
              right: calc(15px + 10 * (100vw - 320px) / (767 - 320));
              top: calc(10px + 20 * (100vw - 320px) / (767 - 320));
              bottom: auto;
              width: calc(110px + 30 * (100vw - 320px) / (767 - 320));
              .pagination-btn {
                &:hover {
                  width: 45px;
                  height: 45px;
                }
              }
            }
          }
          .swiper-content {
            grid-template-columns: 1fr;
            gap: 0px 0px;
            .avatar-block {
              grid-row: 1;
              margin-bottom: 20px;
              width: calc(150px + 50 * (100vw - 320px) / (767 - 320));
              height: calc(150px + 50 * (100vw - 320px) / (767 - 320));
            }
            .commentator-name {
              grid-row: 2;
              grid-column: 1;
            }
            .commentator-post {
              grid-row: 3;
              grid-column: 1;
              margin-bottom: 30px;
            }
            .comment {
              grid-row: 4;
              .triangle {
                transform: scale(1, 1);
                bottom: auto;
                width: 83px;
                top: -33px;
                left: 100px;
              }
            }
          }
        }
        .swiper-slide {
          max-width: 670px;
          width: 100%;
          padding: 25px;
          .swiper-content {
          }
        }
      }
    }
  }
}
</style>

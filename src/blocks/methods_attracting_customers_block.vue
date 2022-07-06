<template>
  <div class="block" id="block8" ref="block8">
    <div class="wrapper">
      <div class="title flex">
        Наши методы лечения дефицита клиентов
        <div class="decor-line"></div>
      </div>
      <div class="methods-attracting-customers">
        <div class="circles">
          <div class="big-circle">
            <div class="middle-circle">
              <div class="small-circle"></div>
            </div>
          </div>
          <div
            class="method"
            id="method_1"
            ref="method_1"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text blue">
              Разрабатываем маркетинговую стратегию клиники
            </div>
            <div class="method-description">
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

              Предложим оптимальную стратегию привлечения пациентов с учетом
              масштабов бизнеса (частный кабинет, специализированная клиника,
              многопрофильный медицинский центр).<br /><br />Поможем
              сориентироваться, с чего начать продвижение медицинской клиники.
            </div>
          </div>
          <div
            class="method"
            id="method_2"
            ref="method_2"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text blue">
              Контролируем и улучшаем онлайн репутацию клиники
            </div>
            <div class="method-description">
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

              Все знают, что отзывы - лучшая реклама, в том числе и в интернете.
              Проводим мониторинг, помогаем в работе с негативом. Берем ваши
              положительные отзывы из Книги Отзывов и переносим их в
              Интернет.<br /><br />
              Доверие к клинике, докторам повышается — пациенты из сети
              становятся такими же, как пациенты по сарафанному радио.
            </div>
          </div>
          <div
            class="method"
            id="method_3"
            ref="method_3"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text">Строим понятную аналитику</div>
            <div class="method-description">
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

              Правильно настроим Яндекс Метрику и Google Analytics, пропишем
              необходимые цели и сегменты. Подключим коллтрекинг для
              отслеживания звонков и соединим его с CRM по работе с записями на
              приём.<br /><br />Это позволит оценить эффективность каждого
              источника/канала трафика по стоимости привлечения пациента.<br /><br />Как
              результат - оптимизируем менее низко конверсионные каналы и
              масштабируем более эффективные.
            </div>
          </div>
          <div
            class="method"
            id="method_4"
            ref="method_4"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text">Не забываем про соцсети</div>
            <div class="method-description">
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

              Подогреваем вашу аудиторию в соцсети.<br /><br />Подготовим и
              оформим ваш канал, например вконтакте, подготовим первичный
              контент и распланируем публикации, при необходимости подключим ваш
              официальный канал в телеграм.<br /><br />Все для того, чтобы в
              ваших соцсетях была «движуха» и заявки.
            </div>
          </div>
          <div
            class="method"
            id="method_5"
            ref="method_5"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text">Создаем и управляем рекламными кампаниями</div>
            <div class="method-description">
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

              Контекстная реклама в Яндекс.Директ и до последнего времени в
              Google Adwords - идеальный вариант, когда пациенты нужны "ещё
              вчера".<br /><br />
              Вручную прорабатываем каждую рекламную кампанию, добиваюсь
              минимальной стоимости клика при максимальном количестве лидов и
              пациентов. Тестируем варианты объявлений и стратегий.
            </div>
          </div>
          <div
            class="method"
            id="method_6"
            ref="method_6"
            :class="methodsClass"
            @mouseover="calculatingPosition"
          >
            <div class="text">Повышаем конверсию сайта</div>
            <div class="method-description">
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

              Измеряем текущую конверсию сайта, анализируем поведение
              пользователей на сайте, изучаем сайты конкурентов и факторы
              принятия решения о покупке типичными представителями целевой
              аудитории.<br /><br />Используем альтернативные каналы маркетинга,
              проводим A/B тестирование, внедряем новые акции, предложения и
              креативы.
            </div>
          </div>
        </div>

        <img
          src="@/assets/image/block8/decor_img_1.png"
          class="decor-img"
          id="decor-img_1"
        />
      </div>
      <div class="button-block flex">
        <div class="pink-button">Узнать больше</div>
        <div class="blue-border-button">Оставить заявку</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      block: "",
      positionY: "bottom",
      positionX: "left",
    };
  },
  computed: {
    methodsClass() {
      return "method_" + this.positionX + " method_" + this.positionY;
    },
  },
  methods: {
    calculatingPosition(e) {
      //Определение пересечений половинок жкрана (горизонтальной и вертикальной)
      const horizontalCenter = window.innerHeight / 2;
      const verticalCenter = window.innerWidth / 2;
      if (e.clientY > horizontalCenter) {
        this.positionY = "bottom";
      } else {
        this.positionY = "top";
      }

      if (e.clientX > verticalCenter) {
        this.positionX = "right";
      } else {
        this.positionX = "left";
      }
    },
  },
  mounted() {
    this.block = this.$refs.block8;
  },
};
</script>

<style lang="scss" scoped>
.block {
  &#block8 {
    padding: 120px 0px;
    .wrapper {
      .title {
        width: 426px;
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
        flex-direction: column;
        .decor-line {
          margin-top: 3px;
          width: 257px;
          height: 10px;
          background: #696fe6;
        }
      }
      .methods-attracting-customers {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 880px;
        margin-bottom: 120px;
        .circles {
          top: 0;
          position: absolute;
          width: 880px;
          height: 880px;
          display: flex;
          justify-content: center;
          align-items: center;
          .big-circle {
            width: 880px;
            height: 880px;
            border-radius: 100%;
            border: 3px solid #5356ae;
            display: flex;
            justify-content: center;
            align-items: center;
            .middle-circle {
              width: 560px;
              height: 560px;
              border-radius: 100%;
              border: 3px solid #5356ae;
              display: flex;
              justify-content: center;
              align-items: center;
              .small-circle {
                width: 240px;
                height: 240px;
                border-radius: 100%;
                border: 3px solid #5356ae;
              }
            }
          }
          .method {
            position: absolute;
            z-index: 2;
            width: 150px;
            height: 150px;
            border-radius: 100%;
            background-color: #696fe6;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 0px 16px;
            .text {
              font-style: normal;
              font-weight: 500;
              font-size: 15px;
              line-height: 18px;
              text-align: center;
              color: #ffffff;
              &.blue {
                color: #5356ae;
              }
            }
            //Описание метода
            .method-description {
              transform: translateY(100%);
              display: none;
              opacity: 0;
              transition: opacity 0.6s;
              background-color: #ffffff;
              position: absolute;
              padding: 25px 30px;
              border: 3px solid #5356ae;
              border-radius: 20px;
              width: 426px;
              //Стили текста
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              color: #424c5c;
              .triangle {
                position: absolute;
                top: -36px;
                left: 121px;
              }
            }

            &_left {
              .method-description {
                left: -55px;
              }
              &.method_bottom {
                .method-description {
                  transform: translateY(-100%);
                  .triangle {
                    top: auto;
                    bottom: -35.8px;
                    transform: scale(1, -1);
                  }
                }
              }
            }
            &_right {
              .method-description {
                left: -215px;
                .triangle {
                  left: auto;
                  right: 121px;
                  transform: scale(-1, 1);
                }
              }
              &.method_bottom {
                .method-description {
                  transform: translateY(-100%);
                  .triangle {
                    top: auto;
                    bottom: -36px;
                    transform: scale(-1, -1);
                  }
                }
              }
            }
            &:hover {
              animation-play-state: paused !important;
              z-index: 3;
              .method-description {
                display: flex;
                transition: opacity 0.1s 0.1s;
                opacity: 1;
              }
            }
            //Большой круг
            &#method_1 {
              background: #cbcdf4;
              animation: method_1_animation 23s linear infinite;
              @keyframes method_1_animation {
                from {
                  transform: rotate(0deg) translateY(0) translateX(-440px)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(0) translateX(-440px)
                    rotate(-360deg);
                }
              }
            }
            &#method_2 {
              background: #cbcdf4;
              animation: method_2_animation 23s linear infinite;
              @keyframes method_2_animation {
                from {
                  transform: rotate(0deg) translateY(0) translateX(440px)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(0) translateX(440px)
                    rotate(-360deg);
                }
              }
            }
            //Средний круг
            &#method_3 {
              background: #696fe5;
              animation: method_3_animation 20s linear infinite;
              @keyframes method_3_animation {
                from {
                  transform: rotate(0deg) translateY(-280px) translateX(0)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(-280px) translateX(0)
                    rotate(-360deg);
                }
              }
            }
            &#method_4 {
              background: #696fe5;
              animation: method_4_animation 20s linear infinite;
              @keyframes method_4_animation {
                from {
                  transform: rotate(0deg) translateY(280px) translateX(0)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(280px) translateX(0)
                    rotate(-360deg);
                }
              }
            }
            //Малый круг
            &#method_5 {
              background: #5356ae;
              animation: method_5_animation 17s linear infinite;
              @keyframes method_5_animation {
                from {
                  transform: rotate(0deg) translateY(0) translateX(-120px)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(0) translateX(-120px)
                    rotate(-360deg);
                }
              }
            }
            &#method_6 {
              background: #5356ae;
              animation: method_6_animation 17s linear infinite;
              @keyframes method_6_animation {
                from {
                  transform: rotate(0deg) translateY(0) translateX(120px)
                    rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(0) translateX(120px)
                    rotate(-360deg);
                }
              }
            }
          }
        }
        .decor-img {
          &#decor-img_1 {
            top: -140px;
            position: absolute;
          }
        }
      }
      .button-block {
        gap: 40px;
        justify-content: flex-start;
      }
    }
  }
}
</style>

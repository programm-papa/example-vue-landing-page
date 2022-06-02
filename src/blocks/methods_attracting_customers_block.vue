<template>
  <div class="block" id="block8">
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
          <div class="method" id="method_1" ref="method_1">
            <div class="text blue">
              Разрабатываем маркетинговую стратегию клиники
            </div>
          </div>
          <div class="method" id="method_2" ref="method_2">
            <div class="text blue">
              Контролируем и улучшаем онлайн репутацию клиники
            </div>
          </div>
          <div class="method" id="method_3" ref="method_3">
            <div class="text">Строим понятную аналитику</div>
          </div>
          <div class="method" id="method_4" ref="method_4">
            <div class="text">Не забываем про соцсети</div>
          </div>
          <div class="method" id="method_5" ref="method_5">
            <div class="text">Создаем и управляем рекламными кампаниями</div>
          </div>
          <div class="method" id="method_6" ref="method_6">
            <div class="text">Повышаем конверсию сайта</div>
          </div>
        </div>

        <img
          src="@/assets/image/block8/decor_img_1.png"
          class="decor-img"
          id="decor-img_1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
              color: #FFFFFF;
              &.blue {
                color: #5356AE;
              }
            }
            &:hover {
              animation-play-state: paused !important;
              z-index: 3;
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
    }
  }
}
</style>

<template>
  <div class="block" id="block2" ref="block2">
    <div class="bacground-wrapper">
      <div class="wrapper flex">
        <a class="card" href="#block3" @click="openSpecialMenu = true">
          <div class="card-img-circle">
            <div class="bacground-circle">
              <img src="@/assets/image/block2/services.png" alt="" />
            </div>
          </div>
          <div class="description">
            <div class="title">То, что мы создаём</div>
            <div class="text">
              Мы создаем эффективную систему привлечения клиентов при помощи
              индивидуально разработанных digital-продуктов, ориентируясь на
              интересы бизнеса и его аудитории.
            </div>
          </div>
          <div class="go-btn">
            <div class="text">Услуги</div>
            <div class="arrow">
              <svg
                width="31"
                height="9"
                viewBox="0 0 31 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </a>
        <div class="card">
          <div class="card-img-circle">
            <div class="bacground-circle">
              <img src="@/assets/image/block2/cases.png" alt="" />
            </div>
          </div>
          <div class="description">
            <div class="title">Что мы уже создали</div>
            <div class="text">
              Работаем комплексно или по отдельным направлениям. Для наглядности
              предлагаем ознакомиться с примерами наших работ.
            </div>
          </div>
          <div class="go-btn">
            <div class="text">Кейсы</div>
            <div class="arrow">
              <svg
                width="31"
                height="9"
                viewBox="0 0 31 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img-circle">
            <div class="bacground-circle">
              <img src="@/assets/image/block2/calculate.png" alt="" />
            </div>
          </div>
          <div class="description">
            <div class="title">Готовы начать?</div>
            <div class="text">
              Оставьте заявку на консультацию и предварительный расчёт работ по
              разработке вашего нового цифрового продукта и маркетинговым
              услугам
            </div>
          </div>
          <div class="go-btn">
            <div class="text">Рассчитать стоимость</div>
            <div class="arrow">
              <svg
                width="31"
                height="9"
                viewBox="0 0 31 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block {
  &#block2 {
    .bacground-wrapper {
      width: calc(100% - 200px);
      min-width: 1366px;
      margin: 0px auto;
      padding: 70px 0px;
      background: #f3f4f9;
      border-radius: 20px;
      .wrapper {
        width: 1200px;
        padding: 0px 20px;
        gap: 40px;
        .card {
          width: 360px;
          height: 495px;
          background-color: #ffffff;
          border: 2px dashed #696fe6;
          border-radius: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          cursor: pointer;
          .card-img-circle {
            width: 180px;
            height: 180px;
            border: 2px dashed #696fe6;
            border-radius: 100%;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            .bacground-circle {
              width: 150px;
              height: 150px;
              border-radius: 100%;
              background: #f3f4f9;
              box-shadow: inset 0px 4px 10px rgba(105, 111, 229, 0.15);
            }
          }
          .description {
            padding: 30px;
            padding-right: 27px;
            width: 100%;
            .title {
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 25px;
              letter-spacing: 0.02em;
              color: #424c5c;
              margin-bottom: 20px;
            }
            .text {
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 150%;
              color: #424c5c;
            }
          }
          .go-btn {
            width: calc(100% + 4px);
            height: 60px;
            border-radius: 0px 0px 20px 20px;
            background: #696fe6;
            position: absolute;
            left: -2px;
            bottom: -2px;
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 0px 30px;
            .text {
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #ffffff;
            }
            .arrow {
              position: relative;
            }
          }
          &:hover {
            .go-btn {
              background-color: #ff5555;
              .arrow {
                left: 0px;
                animation: arrowAnim 0.7s linear infinite;
                @keyframes arrowAnim {
                  0% {
                    left: 0px;
                  }
                  50% {
                    left: 5px;
                  }
                  100% {
                    left: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

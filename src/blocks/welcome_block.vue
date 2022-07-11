<template>
  <div id="block1" class="block">
    <div class="wrapper flex">
      <div class="content">
        <div class="description">
          Комплексный маркетинг для стоматологий и медицинских клиник
        </div>
        <div class="title">
          Нужен <span class="stroke-text">новый</span> поток клиентов
          <span class="stroke-text">для </span>
          <span class="stroke-text">вашей</span> клиники?
        </div>
        <div class="pink-button">Да, мне нужны пациенты</div>
      </div>
      <div class="decor-img">
        <div class="input-efect-wrap flex">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5027 15.1668C16.4602 13.5243 16.7155 10.606 15.073 8.6485C13.4305 6.69105 10.5122 6.43573 8.55472 8.07823C6.59727 9.72073 6.34194 12.6391 7.98445 14.5965C9.62695 16.554 12.5453 16.8093 14.5027 15.1668ZM15.2462 16.0529C17.6931 13.9997 18.0122 10.3518 15.9591 7.905C13.906 5.45818 10.258 5.13903 7.81122 7.19215C5.3644 9.24528 5.04525 12.8932 7.09837 15.34C9.1515 17.7868 12.7994 18.106 15.2462 16.0529Z"
              fill="#ECC0C7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.1478 20.4121L14.4303 15.9818L15.3164 15.2383L19.0339 19.6686L18.1478 20.4121Z"
              fill="#ECC0C7"
            />
          </svg>
          <div class="input-efect-text">{{ inputEfectText }}</div>
          <div class="input-line"></div>
        </div>
        <div class="phone-image">
          <img src="@/assets/image/top_decor-img/phone.png" alt="" />
        </div>
        <div class="outer-circle">
          <div class="heart img-wrap">
            <img src="@/assets/image/top_decor-img/heart.png" alt="" />
          </div>
          <div class="tooth img-wrap">
            <img src="@/assets/image/top_decor-img/tooth.png" alt="" />
          </div>
          <div class="eye img-wrap">
            <img src="@/assets/image/top_decor-img/eye.png" alt="" />
          </div>
        </div>
        <div class="internal-circle">
          <div class="animated-bell">
            <div class="bell img-wrap">
              <img src="@/assets/image/top_decor-img/bell.png" alt="" />
            </div>
            <div class="notification">{{ notificationNumber }}</div>
          </div>
        </div>
        <div class="doctor">
          <img src="@/assets/image/top_decor-img/doctor.png" alt="" />
          <img
            class="doctor__brow_left"
            src="@/assets/image/top_decor-img/brow.svg"
          />
          <img
            class="doctor__brow_right"
            src="@/assets/image/top_decor-img/brow.svg"
          />
        </div>
        <div class="cloud">
          <img src="@/assets/image/top_decor-img/cloud.png" alt="" />
        </div>
        <div class="plant">
          <img src="@/assets/image/top_decor-img/plant.png" alt="" />
        </div>
        <div class="screen">
          <img src="@/assets/image/top_decor-img/screen.png" alt="" />
        </div>
        <div class="screen_chart">
          <div class="line-chart">
            <!-- Круги -->
            <div class="circle" id="circle1"></div>
            <div class="circle" id="circle2"></div>
            <div class="circle" id="circle3"></div>
            <div class="circle" id="circle4"></div>
            <!-- Линии -->
            <div class="line" id="line1"></div>
            <div class="line" id="line2"></div>
            <div class="line" id="line3"></div>
          </div>
          <div class="segment-chart">
            <div class="segment" id="segment1"></div>
            <div class="segment" id="segment2"></div>
            <div class="segment" id="segment3"></div>
            <div class="segment" id="segment4"></div>
          </div>
        </div>
        <div class="light_bulb">
          <img src="@/assets/image/top_decor-img/light_bulb.png" alt="" />
        </div>
        <div class="chat1">
          <img src="@/assets/image/top_decor-img/bubble_speech.png" alt="" />
        </div>
        <div class="chat2">
          <img src="@/assets/image/top_decor-img/bubble_speech.png" alt="" />
        </div>
        <div class="stone">
          <img src="@/assets/image/top_decor-img/stone.png" alt="" />
        </div>
        <div class="purpose">
          <img src="@/assets/image/top_decor-img/target.png" alt="" />
        </div>
        <div class="arrow">
          <img src="@/assets/image/top_decor-img/arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //Поле ввода в картинке
      carriageIndent: 0,
      textArr: [
        "компьютерная томография",
        "протезирование зубов",
        "установка импланта",
        "суточный холтер ЭКГ",
        "записаться к ортодонту",
        "удаление зуба ребёнку",
      ],
      textArrIndex: 0,
      inputEfectText: "",

      //Колокол уведомления
      notificationNumber: 82,
    };
  },
  methods: {
    //эффект ввода текста
    inputEffect: function () {
      if (this.textArrIndex >= this.textArr.length) {
        this.textArrIndex = 0;
      }
      const textValue = this.textArr[this.textArrIndex];
      let textСharacterIndex = 0;
      let insertText = "";
      this.printСharacter(textValue, textСharacterIndex, insertText);
    },
    printСharacter: function (textValue, textСharacterIndex, insertText) {
      if (textValue.length > 0 && textСharacterIndex < textValue.length) {
        setTimeout(
          function () {
            const newInsertText = insertText + textValue[textСharacterIndex];
            this.inputEfectText = newInsertText;
            const newTextСharacterIndex = textСharacterIndex + 1;
            if (newTextСharacterIndex >= textValue.length) {
              setTimeout(
                function () {
                  this.removeСharacter(
                    textValue,
                    newTextСharacterIndex,
                    newInsertText
                  );
                }.bind(this),
                500
              );
              return false;
            } else {
              this.printСharacter(
                textValue,
                newTextСharacterIndex,
                newInsertText
              );
            }
          }.bind(this),
          this.generateRandom(100, 220)
        );
      }
    },
    removeСharacter(textValue, textСharacterIndex, insertText) {
      if (textValue.length > 0 && textСharacterIndex >= 0) {
        setTimeout(
          function () {
            const newInsertText = insertText.substring(
              0,
              insertText.length - 1
            );
            this.inputEfectText = newInsertText;
            const newTextСharacterIndex = textСharacterIndex - 1;
            if (newTextСharacterIndex < 0) {
              this.textArrIndex = this.textArrIndex + 1;
              setTimeout(
                function () {
                  this.inputEffect();
                }.bind(this),
                300
              );
              return false;
            } else {
              this.removeСharacter(
                textValue,
                newTextСharacterIndex,
                newInsertText
              );
            }
          }.bind(this),
          this.generateRandom(20, 70)
        );
      }
    },
    generateRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    //увеличения числа уведомлений
    changeNotificationNumber: function () {
      setTimeout(
        function () {
          this.notificationNumber >= 99
            ? (this.notificationNumber = 82)
            : (this.notificationNumber += 1);
          this.changeNotificationNumber();
        }.bind(this),
        2100
      );
    },
  },
  mounted() {
    this.inputEffect();
    this.changeNotificationNumber();
  },
};
</script>
<style lang="scss" scoped>
.block {
  &#block1 {
    .wrapper {
      width: 1190px;
      padding: 80px 0px 85px;
      .content {
        padding-top: 60px;
        .description {
          width: 550px;
          height: 88px;
          border: 1px solid #e7e7e7;
          border-radius: 76px;
          padding: 20px 29px;
          margin-bottom: 30px;
          //Стили текста
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #424c5c;
        }
        .title {
          padding-left: 31px;
          width: 550px;
          font-weight: 700;
          font-size: 45px;
          line-height: 56px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #696fe6;
          margin-bottom: 40px;
          .stroke-text {
            color: #fff;
            text-shadow: #696fe6 1px 0px 0.6px, #696fe6 0px 1px 0.6px,
              #696fe6 0px -1px 0.6px, #696fe6 -1px 0px 0.6px;
          }
        }
        .pink-button {
          margin-left: 31px;
        }
      }
      .decor-img {
        width: 100%;
        height: 645px;
        position: relative;
        .input-efect-wrap {
          position: absolute;
          width: 250px;
          height: 29px;
          padding-left: 6px;
          border: 1px solid #e7e7e7;
          border-radius: 84px;
          left: 368px;
          transform-origin: 0px 0px;
          transform: rotate(5deg);
          align-items: center;
          svg {
            margin-right: 3px;
          }
          .input-efect-text {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.03em;
            color: #424c5c;
          }
          .input-line {
            width: 1px;
            height: 14px;
            background-color: #424c5c;
            animation: inputLineAnimation 1s linear infinite;
            @keyframes inputLineAnimation {
              0% {
                opacity: 1;
              }
              49% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }
          }
        }
        .phone-image {
          position: absolute;
          width: 58px;
          height: 58px;
          left: 156px;
          top: 48px;
          transform: rotate(-3deg);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .outer-circle {
          position: absolute;
          top: 76px;
          left: 148px;
          width: 448px;
          height: 448px;
          border: 1px solid #e7e7e7;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .img-wrap {
            position: absolute;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform-origin: 50% 50%;
            &.heart {
              img {
                width: 57px;
                height: auto;
              }
              animation: rotate1 10s infinite linear;
              @keyframes rotate1 {
                from {
                  transform: rotate(0deg) translateY(-216.622px)
                    translateX(41px) rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(-216.622px)
                    translateX(41px) rotate(-360deg);
                }
              }
            }
            &.tooth {
              img {
                width: 38px;
                height: auto;
              }
              animation: rotate2 10s infinite linear;
              @keyframes rotate2 {
                from {
                  transform: rotate(0deg) translateY(-181.44px)
                    translateX(128px) rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(-181.44px)
                    translateX(128px) rotate(-360deg);
                }
              }
            }
            &.eye {
              img {
                width: 54px;
                height: auto;
              }
              animation: rotate3 10s infinite linear;
              @keyframes rotate3 {
                from {
                  transform: rotate(0deg) translateY(-116.646px)
                    translateX(191px) rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateY(-116.646px)
                    translateX(191px) rotate(-360deg);
                }
              }
            }
          }
        }
        .internal-circle {
          position: absolute;
          top: 182px;
          left: 254px;
          width: 236px;
          height: 236px;
          border: 1px solid #e7e7e7;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .animated-bell {
            width: 64px;
            height: 64px;
            position: absolute;
            transform: rotate(0deg) translateY(-93px) translateX(73px)
              rotate(0deg);
            .img-wrap {
              width: 60px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              &.bell {
                img {
                  width: 45px;
                  height: auto;
                }
                transform-origin: 50% 0%;
                animation: rotate_bell 2.1s infinite linear;
                @keyframes rotate_bell {
                  0% {
                    transform: rotate(0deg);
                  }
                  5% {
                    transform: rotate(5deg);
                  }
                  10% {
                    transform: rotate(0deg);
                  }
                  15% {
                    transform: rotate(-5deg);
                  }
                  20% {
                    transform: rotate(0deg);
                  }
                }
              }
            }
            .notification {
              position: absolute;
              width: 30px;
              height: 30px;
              background: url(../assets/image/top_decor-img/bell_notification.png);
              top: 0;
              right: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              //Стили текста
              font-weight: 600;
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #ffffff;
            }
          }
        }
        .doctor {
          position: absolute;
          top: 33px;
          left: 195px;
          img {
            width: auto;
            height: 314px;
          }

          .doctor__brow_left {
            transform: scale(-1, 1);
            width: 10px;
            height: auto;
            left: 41%;
            top: 13%;
            position: absolute;
            animation: leftBrowAnim 2.5s infinite;
            @keyframes leftBrowAnim {
              0% {
                top: 13% !important;
              }
              10% {
                top: 12%;
              }
              15% {
                top: 12.7%;
              }
              20% {
                top: 12%;
              }
              30% {
                top: 12.7%;
              }
              95% {
                top: 12.7%;
              }
              100% {
                top: 13%;
              }
            }
          }
          .doctor__brow_right {
            width: 10px;
            height: auto;
            left: 53%;
            top: 13%;
            position: absolute;
            animation: rightBrowAnim 2.5s infinite;
            @keyframes rightBrowAnim {
              0% {
                top: 13% !important;
              }
              10% {
                top: 12%;
              }
              15% {
                top: 12.7%;
              }
              20% {
                top: 12%;
              }
              30% {
                top: 12.5%;
              }
              35% {
                top: 12%;
              }
              95% {
                top: 12%;
              }
              100% {
                top: 13%;
              }
            }
          }
        }
        .cloud {
          position: absolute;
          top: 210px;
          left: 50px;
        }
        .light_bulb {
          position: absolute;
          width: 96px;
          height: 146px;
          top: 240px;
          right: 38px;
        }
        .screen {
          position: absolute;
          top: 284px;
          left: 92px;
        }
        .screen_chart {
          width: 142px;
          height: 123px;
          position: absolute;
          top: 398px;
          left: 196px;
          .line-chart {
            position: relative;
            .circle {
              width: 13px;
              height: 13px;
              border-radius: 100%;
              position: absolute;
              z-index: 2;
              &#circle1,
              &#circle3 {
                background: linear-gradient(135deg, #bfbfff 0%, #7676e4 100%);
              }
              &#circle2,
              &#circle4 {
                background: linear-gradient(135deg, #f9becf 0%, #d25b97 100%);
              }
              &#circle1 {
                top: 47px;
                left: 4px;
                animation: cirkle1 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes cirkle1 {
                  0% {
                    top: 24px;
                  }
                  100% {
                    top: 47px;
                  }
                }
              }
              &#circle2 {
                top: 24px;
                left: 44px;
                animation: cirkle2 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes cirkle2 {
                  0% {
                    top: 24px;
                  }
                  100% {
                    top: 24px;
                  }
                }
              }
              &#circle3 {
                top: 35px;
                left: 84px;
                animation: cirkle3 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes cirkle3 {
                  0% {
                    top: 24px;
                  }
                  100% {
                    top: 35px;
                  }
                }
              }
              &#circle4 {
                top: 0px;
                left: 123px;
                animation: cirkle4 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes cirkle4 {
                  0% {
                    top: 24px;
                  }
                  100% {
                    top: 0px;
                  }
                }
              }
            }
            .line {
              height: 3px;
              position: absolute;
              background-color: #74c3f2;
              z-index: 1;
              &#line1 {
                width: 40px;
                top: 29px;
                left: 8px;
                transform-origin: 100% 50%;
                transform: rotate(-31deg);
                animation: line1 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes line1 {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(-31deg);
                  }
                }
              }
              &#line2 {
                width: 40px;
                top: 29px;
                left: 51px;
                transform-origin: 0% 50%;
                transform: rotate(14deg);
                animation: line2 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes line2 {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(14deg);
                  }
                }
              }
              &#line3 {
                width: 40px;
                top: 29px;
                left: 90px;
                transform-origin: 0% 50%;
                transform: rotate(-43deg);
                animation: line3 0.4s 1.7s linear;
                animation-fill-mode: both;
                @keyframes line3 {
                  0% {
                    transform: rotate(0deg);
                    top: 29px;
                  }
                  100% {
                    transform: rotate(-43deg);
                    top: 40px;
                    width: 55px;
                  }
                }
              }
            }
          }
          .segment-chart {
            height: 90px;
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            align-items: flex-end;
            gap: 20px;
            .segment {
              width: 20px;
              height: 80px;
              border-radius: 44px;
              &#segment1 {
                animation: segment1 0.4s 1.7s linear;
                animation-fill-mode: both;
                background: linear-gradient(90deg, #bfbfff 0%, #7676e4 100%);
                @keyframes segment1 {
                  0% {
                    height: 80px;
                  }
                  100% {
                    height: 40px;
                  }
                }
              }
              &#segment2 {
                animation: segment2 0.4s 1.7s linear;
                animation-fill-mode: both;
                background: linear-gradient(90deg, #f9becf 0%, #d25b97 100%);
                @keyframes segment2 {
                  0% {
                    height: 80px;
                  }
                  100% {
                    height: 65px;
                  }
                }
              }
              &#segment3 {
                animation: segment3 0.4s 1.7s linear;
                animation-fill-mode: both;
                background: linear-gradient(90deg, #bfbfff 0%, #7676e4 100%);
                @keyframes segment3 {
                  0% {
                    height: 80px;
                  }
                  100% {
                    height: 55px;
                  }
                }
              }
              &#segment4 {
                animation: segment4 0.4s 1.7s linear;
                animation-fill-mode: both;
                background: linear-gradient(90deg, #f9becf 0%, #d25b97 100%);
                @keyframes segment4 {
                  0% {
                    height: 80px;
                  }
                  100% {
                    height: 90px;
                  }
                }
              }
            }
          }
        }
        .chat1 {
          position: absolute;
          top: 369px;
          left: 18px;
        }
        .chat2 {
          transform: scaleX(-1);
          position: absolute;
          top: 430px;
          left: 493px;
        }
        .plant {
          position: absolute;
          top: 513px;
          left: 549px;
        }
        .stone {
          position: absolute;
          top: 581px;
          left: 515px;
        }
        .purpose {
          position: absolute;
          top: 499px;
          left: 35px;
        }
        .arrow {
          position: absolute;
          top: 476px;
          left: 12px;
          transform-origin: 100% 100%;
          animation: arrow_purpose 2.3s 1s linear;
          animation-fill-mode: both;
          @keyframes arrow_purpose {
            0% {
              top: -4000px;
              left: -4000px;
              transform: rotate(-10deg);
            }
            30% {
              top: 476px;
              left: 12px;
              transform: rotate(0deg);
            }
            32% {
              transform: rotate(-4deg);
            }
            36% {
              transform: rotate(4deg);
            }
            38% {
              transform: rotate(0deg);
            }
            40% {
              transform: rotate(-2deg);
            }
            44% {
              transform: rotate(2deg);
            }
            46% {
              transform: rotate(0deg);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    &#block1 {
      .wrapper {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0px 50px 60px;
        .content {
          margin-bottom: 40px;
        }
        .decor-img {
          width: 645px;
        }
      }
    }
  }
}
</style>

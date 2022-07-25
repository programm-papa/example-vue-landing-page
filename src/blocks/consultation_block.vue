<template>
  <div class="block" id="block4">
    <div class="bacground-wrapper">
      <div class="wrapper flex">
        <div class="decor-img">
          <div class="painted-circle">
            <img src="@/assets/image/block4/decor-img-woman.png" alt="" />
          </div>
          <div class="border-circle"></div>
        </div>
        <div class="decor-arrow">
          <img src="@/assets/image/block4/arrow.svg" alt="" />
          <img src="@/assets/image/block4/arrow-adaptive.svg" alt="" />
        </div>
        <div class="left">
          <div class="title">Не можете определиться с необходимой услугой?</div>
          <div class="pink-button" @click="{this.$store.dispatch('updateCallBackPopUpType', 'consultationV2');this.$store.dispatch('updateOpenCallBackPopUp', true);}">Получить бесплатную консультацию</div>
        </div>
        <div class="right">
          <div class="description">
            В таком случае оставьте заявку на консультацию либо ознакомьтесь
            далее с пошаговым перечнем работ, которые последовательно
            выстраивают
            <span class="highlighting">эффективную систему привлечения</span>
            клиентов в вашу клинику или салон.
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
  &#block4 {
    .bacground-wrapper {
      width: calc(100% - 200px);
      min-width: 1366px;
      margin: 0px auto;
      background: #5356ae;
      border-radius: 20px;
      min-height: 320px;
      overflow: hidden;
      .wrapper {
        width: 1200px;
        padding: 70px 0px;
        gap: 60px;
        padding-left: 322px;
        position: relative;
        .decor-img {
          .border-circle {
            position: absolute;
            width: 121px;
            height: 121px;
            border: 1px solid #696fe6;
            border-radius: 100%;
            left: 217px;
            bottom: -40px;
          }
          .painted-circle {
            position: absolute;
            z-index: 1;
            width: 300px;
            height: 300px;
            border-radius: 100%;
            background: #696fe6;
            left: -6px;
            bottom: -53px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              position: absolute;
              top: -34px;
            }
          }
        }
        .decor-arrow {
          position: absolute;
          top: 140px;
          left: 690px;
          img {
            &:nth-of-type(2) {
              display: none;
            }
          }
        }
        .left {
          .title {
            width: 340px;
            margin-bottom: 35px;
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #ffffff;
          }
        }
        .right {
          .description {
            width: 400px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: #ffffff;
            .highlighting {
              font-weight: 700;
              background-color: #696fe5;
              border-radius: 5px;
              padding: 0px 5px 3px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    &#block4 {
      .bacground-wrapper {
        width: calc(100% - 100px);
        min-width: auto;
        height: 452px;
        .wrapper {
          padding: 40px 30px;
          width: 670px;
          gap: 0;
          .decor-img {
            .painted-circle {
              left: 30px;
              bottom: auto;
              top: 205px;
            }
            .border-circle {
              left: 217px;
              bottom: auto;
              top: 371px;
            }
          }
          .decor-arrow {
            transform: scale(-1, 1);
            top: 33px;
            left: 370px;
            img {
              transform: rotate(130deg);
              width: 125.23px;
              height: 100.55px;
            }
          }
          .left {
            .pink-button {
              position: absolute;
              left: 340px;
              top: 300px;
            }
          }
          .right {
            .description {
              position: absolute;
              left: 340px;
              top: 134px;
              width: 316px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    &#block4 {
      .bacground-wrapper {
        width: calc(100% - (0px + 100 * (100vw - 320px) / (767 - 320)));
        height: fit-content;
        padding: 40px 0px 120px;
        .wrapper {
          flex-direction: column;
          align-items: center;
          left: 0;
          width: calc(320px + 100 * (100vw - 320px) / (767 - 320));
          padding: 0 20px;
          .decor-img {
            width: fit-content;
            height: fit-content;
            .painted-circle {
              position: relative;
              top: 35px;
              left: auto;
              overflow: hidden;
              img {
                    top: 5px;
              }
            }
            .border-circle {
              top: 218px;
            }
          }
          .decor-arrow {
            transform: scale(1, 1);
            top: 61%;
            left: 73%;
            img {
              &:nth-of-type(1) {
                display: none;
              }
              &:nth-of-type(2) {
                display: block;
                width: 82px;
                height: auto;
                transform: rotate(7deg);
              }
            }
          }
          .left {
            padding-top: 58px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title {
              width: 100%;
              margin-bottom: 20px;
              //Стили текста
              font-size: calc(20px + 6 * (100vw - 320px) / (767 - 320));
              line-height: 150%;
            }
            .pink-button {
              left: auto;
              top: 103%;
              width: 100%;
              max-width: 300px;
            }
          }
          .right {
            .description {
              width: 100%;
              position: relative;
              left: 0px;
              top: 0px;
              //Стили текста
              font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
              line-height: 150%;
            }
          }
        }
      }
    }
  }
}
</style>

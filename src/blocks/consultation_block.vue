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
        </div>
        <div class="left">
          <div class="title">Не можете определиться с необходимой услугой?</div>
          <div class="pink-button">Получить бесплатную консультацию</div>
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
              top: -53px;
            }
          }
        }
        .decor-arrow {
          position: absolute;
          top: 140px;
          left: 690px;
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
}
</style>
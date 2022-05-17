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
        .circles {
          top: 0;
          position: absolute;
          width: 880px;
          height: 880px;
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
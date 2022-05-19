<template>
  <div class="block" id="block12">
    <div class="wrapper">
      <div class="title flex">
        <div class="text flex-column">
          Почему ArtGorka можно довериться
          <div class="decor-border"></div>
        </div>
        <div class="description">
          ArtGorka уже 10 лет разрабатывает проекты для крупных организаций и
          региональных клиентов. Наши принципы – качество продукта, креативность
          идей и ответственность клиентского менеджмента.
        </div>
        <div class="decor-img"></div>
      </div>
      <div class="examples-works">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block {
  &#block12 {
    padding: 120px 0px;
    .wrapper {
      .title {
        margin-bottom: 40px;
        gap: 70px;
        position: relative;
        .text {
          max-width: 660px;
          .decor-border {
            margin-left: auto;
            width: 323px;
            height: 10px;
            background: #696fe6;
          }
          //Стили текста
          font-style: normal;
          font-weight: 800;
          font-size: 30px;
          line-height: 38px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #424c5c;
        }
        .description {
          width: 760px;
          flex: 1;
          //Стили текста
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: #424c5c;
        }
        .decor-img {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: #696fe6;
          left: 370px;
          top: -25px;
        }
      }
    }
  }
}
</style>

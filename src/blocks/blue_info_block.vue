<template>
  <div class="block" id="block5">
    <div class="bacground-wrapper">
      <div class="wrapper flex">
        <div class="title">3 шага на пути к стабильному потоку пациентов</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block {
  &#block5 {
    padding-top: 120px;
    .bacground-wrapper {
      width: calc(100% - 200px);
      min-width: 1366px;
      margin: 0px auto;
      background: #696fe6;
      border-radius: 20px;
      min-height: 80px;
      overflow: hidden;
      .wrapper {
        min-height: 80px;
        background: url(../assets/image/block5/background-img.svg) center center
          no-repeat;
        background-size: contain;
        align-items: center;
        .title {
          font-style: normal;
          font-weight: 800;
          font-size: 42px;
          line-height: 52px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    &#block5 {
      .bacground-wrapper {
        width: calc(100% - 100px);
        min-width: auto;
        .wrapper {
          width: 100%;
          padding: 15px 30px;
        }
      }
    }
  }
}
</style>

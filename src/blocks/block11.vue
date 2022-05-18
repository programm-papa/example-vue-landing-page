<template>
  <div class="block" id="block11">
    <div class="bacground-color">
      <div class="wrapper">
        <div class="title flex">
          <div class="text">кто всё это делает</div>
          <div class="description">
            Наша рабочая группа по направлению медицинского маркетинга. Входит в
            состав digital-студии ART Gorka – web-разработчиков с более чем
            10-летним стажем.
          </div>
          <div class="decor-img"></div>
        </div>
        <div class="studio-employees">
          <div class="employee">
            <div class="employee__description"></div>
            <div class="employee__avatar"><img src="@/assets/image/block11/Костя.png" alt=""></div>
          </div>
          <div class="employee"></div>
          <div class="employee"></div>
          <div class="employee"></div>
          <div class="employee"></div>
          <div class="employee"></div>
          <div class="employee"></div>
          <div class="employee"></div>
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
  &#block11 {
    .bacground-color {
      background-color: #f3f4f9;
      padding: 120px 0px;
    }
    .title {
      margin-bottom: 40px;
      gap: 85px;
      position: relative;
      .text {
        width: 315px;
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
    .studio-employees {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(4, 260px);
      grid-template-rows: repeat(2, 323px);
      .employee {
        padding: 80px 20px 0px 0px;
        position: relative;
        .employee__description {
          width: 240px;
          height: 243px;
          background: #cbcdf4;
          border-radius: 20px;
          padding: 30px;
        }
        .employee__avatar {
          top: 0;
          right: 0;
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 100%;
          border: 3px solid #cbcdf4;
          background: #F3F4F9;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
